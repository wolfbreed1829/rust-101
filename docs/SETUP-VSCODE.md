# Set up in VS Code

[← Back to the lesson](../README.md)

You need VS Code and the Rust toolchain. A toolchain is the set of programs that turns Rust code into a running program.

## Install the tools

1. Install [VS Code](https://code.visualstudio.com/) if you do not have it.
2. Use the official [Rust installer](https://rust-lang.org/tools/install/). Accept the standard installation. On Windows, follow any prompt to install the Visual Studio C++ Build Tools; those provide the linker Rust needs.
3. Close and reopen VS Code after installation so it can find the new commands.
4. Open VS Code's **Extensions** view, search for **rust-analyzer**, and install the extension published by **rust-lang** (`rust-lang.rust-analyzer`).

These steps follow the official [VS Code Rust guide](https://code.visualstudio.com/docs/languages/rust).

## Get your own copy: easiest path

1. Open [the repository](https://github.com/wolfbreed1829/rust-101).
2. Select **Code → Download ZIP**.
3. Extract the ZIP to a folder you can find again.
4. In VS Code, select **File → Open Folder** and open the extracted folder that directly contains `Cargo.toml`. It is usually named `rust-101-main`.
5. Select **Terminal → New Terminal**.

The terminal is the panel where you type commands. It is different from the code editor. Enter these commands one at a time:

```sh
rustc --version
cargo --version
cargo run
```

The first two print version numbers. The last prints build messages followed by:

```text
Hello, Rust!
My code has entered the chat.
```

## If you already use Git

You may clone instead of downloading a ZIP:

```sh
git clone https://github.com/wolfbreed1829/rust-101.git
cd rust-101
code .
```

If `code` is unavailable in your terminal, open the cloned folder with **File → Open Folder** instead. Git is optional for completing the lesson.

## Edit, save, run

Open `src/main.rs`. Make the change in lesson 01, save with **Ctrl+S** (Windows/Linux) or **Cmd+S** (Mac), and type `cargo run` in the terminal again.

For later lessons, use the full command printed on the lesson page. For example:

```sh
cargo run --example 02_variables
```

If a command fails, use the [troubleshooting guide](TROUBLESHOOTING.md).

[Ready? Start lesson 01 →](../lessons/01-hello.md)
