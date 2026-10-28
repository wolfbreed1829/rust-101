# Set up in Replit

[← Back to the lesson](../README.md)

You need a Replit account and a browser. Your Rust code runs on Replit's computer.

## Import your own copy

1. Sign in to [Replit](https://replit.com).
2. Open [Replit's import page](https://replit.com/import) and choose **GitHub**.
3. Paste this repository URL:

   ```text
   https://github.com/wolfbreed1829/rust-101
   ```

4. Complete the import flow. If asked to connect GitHub, follow the sign-in prompts.
5. Open the project's files and find `Cargo.toml`, `src/main.rs`, and `examples/`.
6. Open **Shell** from the editor's tools/search. Type each command and press Enter:

   ```sh
   rustc --version
   cargo --version
   cargo run
   ```

The version commands should print version numbers. Your first run should print:

```text
Hello, Rust!
My code has entered the chat.
```

Replit's interface can vary by account. Its official [GitHub import guide](https://docs.replit.com/build/import-from-providers) describes the current flow.

## Work through the lesson

Open `src/main.rs` and change the greeting. Let the editor finish saving, then run `cargo run` in Shell again.

For lesson 02, edit `examples/02_variables.rs` and type:

```sh
cargo run --example 02_variables
```

Use the command shown in each lesson for the remaining steps. The **Run** button is configured for lesson 01; using Shell makes it clear which lesson you are running. Output appears in Shell when you run a command there. This is a text program, so a blank web preview is normal.

The included `.replit` sets the Run command, and `replit.nix` requests Rust, Cargo, a linker, and editor support. See Replit's [configuration documentation](https://docs.replit.com/features/project-setup/configuration).

## If Rust is missing

If Shell reports `cargo: command not found`, check that `.replit` and `replit.nix` were imported. Enable **Show hidden files** in the file menu to see `.replit`, then restart the project's compute/environment and reopen Shell so its dependencies can load.

If your workspace still does not provision Rust, ask your facilitator to check its system dependencies. As a temporary way to keep learning, paste one lesson's entire `.rs` file into the official [Rust Playground](https://play.rust-lang.org/) and click **Run**. The lesson files are self-contained.

[Ready? Start lesson 01 →](../lessons/01-hello.md)
