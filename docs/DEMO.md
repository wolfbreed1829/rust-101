# Browser demo

Open **[the Rust 101 demo](https://wolfbreed1829.github.io/rust-101/)** and choose a lesson, then press **Run program**. The console displays that program's real output.

The demo shows the unchanged starter programs. The source is read-only; use the linked lesson to do the exercise in Replit or VS Code. The snack shop is the starter you complete in lesson 07. Progress records which demos you have run in this browser, not which exercises you have completed.

## How it runs

The build compiles the original Rust files to WebAssembly with Rust's `wasm32-wasip1` target. A small WASI host connects their console output to the page. There is no remote compiler or simulated output. The host implements only the four system functions these console-only examples import; it is not a general-purpose Rust runtime.

The generated source listing is read from the same `.rs` files used to build each program. Before deployment, every WebAssembly program is executed with the browser host and its output is compared to the native Rust program. The target is described in the official [Rust platform documentation](https://doc.rust-lang.org/rustc/platform-support/wasm32-wasip1.html).

## Build and preview locally

Maintainers need Rust, Python 3, and Node.js. From the project folder:

```sh
rustup target add wasm32-wasip1
python scripts/build_demo.py
node scripts/check_demo.mjs
python -m http.server 4173 --bind 127.0.0.1 --directory demo
```

Open `http://127.0.0.1:4173`. Stop the server with Ctrl+C. Generated files are ignored by Git and rebuilt during publishing.

The `pages.yml` workflow publishes `demo/` to GitHub Pages after the checks pass. It uses GitHub's [custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) support.
