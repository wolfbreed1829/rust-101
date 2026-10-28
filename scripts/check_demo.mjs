// Confirm that the browser executes real Rust and matches native console output.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { executeModule } from '../demo/wasi.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const lessons = JSON.parse(await readFile(new URL('../demo/generated/lessons.json', import.meta.url), 'utf8'));
for (const lesson of lessons) {
  const bytes = await readFile(new URL(`../demo/${lesson.wasm}`, import.meta.url));
  const module = await WebAssembly.compile(bytes);
  const result = executeModule(module);
  const native = spawnSync('cargo', [...lesson.command.split(' ').slice(1), '--quiet', '--locked'], { cwd: root, encoding: 'utf8' });
  assert.equal(native.status, 0, native.stderr);
  assert.equal(result.exitCode, 0, `WASM exit for ${lesson.id}`);
  assert.equal(result.stderr, '', `WASM errors for ${lesson.id}`);
  assert.equal(result.stdout.replaceAll('\r\n', '\n'), native.stdout.replaceAll('\r\n', '\n'), `Output mismatch: ${lesson.id}`);
  assert.deepEqual(executeModule(module), result, 'Rerunning must use a fresh instance');
  console.log(`PASS ${lesson.id}: browser WASM output matches native Rust`);
}
