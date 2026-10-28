# 01 · Say hello

**About 8 minutes · Goal: edit, save, and run your first Rust program.**

[Course home](../README.md) · [Next: variables →](02-variables.md)

## Read

Open **`src/main.rs`** in your editor. The working code is:

```rust
fn main() {
    println!("Hello, Rust!");
    println!("My code has entered the chat.");
}
```

- `fn` starts a function: a named group of instructions.
- `main` is where this program starts running.
- `{` and `}` mark the beginning and end of its instructions.
- `println!` prints a line of text. Keep the `!`; it is part of this tool's syntax.
- Double quotes surround text; a semicolon `;` ends each printing statement.
- Lines beginning with `//` are comments for people. Rust ignores them.

Rust first checks and compiles your code, which turns it into a program the computer can execute. **Cargo** is the command-line helper that does this for you.

## Predict, then run

Which message will appear first? In your terminal or Replit Shell, enter:

```sh
cargo run
```

Expected program output:

```text
Hello, Rust!
My code has entered the chat.
```

Build messages such as `Compiling` and `Finished` are normal. Only the lines above come from your program.

## Your turn

1. Change `Hello, Rust!` to `Hello, Sam!` (or use your own name).
2. Add `println!("I can run Rust!");` inside `main`, below the other messages.
3. Save the file, then run `cargo run` again.

Using Sam, your result should be:

```text
Hello, Sam!
My code has entered the chat.
I can run Rust!
```

## Check yourself

Point to the line that printed the last message. What would happen if you moved it above the other two lines?

**Done when:** your changed greeting and third line appear in the output.

Stuck? [Open lesson 01's hint and answer](../docs/SOLUTIONS.md#01--say-hello).

[Next: name your data →](02-variables.md)
