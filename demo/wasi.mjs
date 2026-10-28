// A deliberately small WASI host for the console-only programs in this course.
// These examples import only environment lookup, console output, and process exit.
// CI runs every compiled module with this host before the demo is deployed.

class ProcessExit {
  constructor(code) { this.code = code; }
}

export function executeModule(module) {
  let instance;
  let stdout = '';
  let stderr = '';
  let exitCode = 0;
  const outDecoder = new TextDecoder();
  const errDecoder = new TextDecoder();
  const memory = () => instance.exports.memory.buffer;
  const view = () => new DataView(memory());
  const wasi = {
    environ_sizes_get(countPointer, sizePointer) {
      view().setUint32(countPointer, 0, true);
      view().setUint32(sizePointer, 0, true);
      return 0;
    },
    environ_get() { return 0; },
    fd_write(fd, vectors, count, writtenPointer) {
      if (fd !== 1 && fd !== 2) return 8; // WASI EBADF
      let written = 0;
      for (let i = 0; i < count; i++) {
        const pointer = view().getUint32(vectors + i * 8, true);
        const length = view().getUint32(vectors + i * 8 + 4, true);
        const bytes = new Uint8Array(memory(), pointer, length);
        if (fd === 1) stdout += outDecoder.decode(bytes, { stream: true });
        else stderr += errDecoder.decode(bytes, { stream: true });
        written += length;
      }
      view().setUint32(writtenPointer, written, true);
      return 0;
    },
    proc_exit(code) { throw new ProcessExit(code); },
  };
  for (const entry of WebAssembly.Module.imports(module)) {
    if (entry.module !== 'wasi_snapshot_preview1' || typeof wasi[entry.name] !== 'function') {
      throw new Error(`This demo does not support the system function ${entry.name}.`);
    }
  }
  instance = new WebAssembly.Instance(module, { wasi_snapshot_preview1: wasi });
  try {
    instance.exports._start();
  } catch (error) {
    if (error instanceof ProcessExit) exitCode = error.code;
    else throw error;
  }
  stdout += outDecoder.decode();
  stderr += errDecoder.decode();
  return { stdout, stderr, exitCode };
}
