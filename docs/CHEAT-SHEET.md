# Rust 101 pocket reference

[← Course home](../README.md)

## Commands

Run these in the folder containing `Cargo.toml`:

| Command | Job |
| --- | --- |
| `cargo run` | Compile and run `src/main.rs` |
| `cargo run --example 02_variables` | Run one named file in `examples/` |
| `cargo check --example 02_variables` | Check that example without running it |
| `cargo fmt` | Format the project's Rust code (requires rustfmt) |

Use the example name from the lesson you are working on. In commands, leave off the `.rs` extension.

## Syntax you have used

These are small fragments; place statements inside `fn main() { ... }` when trying them.

| Task | Rust |
| --- | --- |
| Print a message | `println!("Hello!");` |
| Name some text | `let name = "Sam";` |
| Print a variable | `println!("Hi, {name}!");` |
| Store a number | `let price = 2;` |
| Store a yes/no value | `let ready = true;` |
| Allow changes | `let mut cookies = 3;` |
| Add to a value | `cookies += 1;` |
| Multiply | `let total = cookies * price;` |
| Compare | `budget >= total` |
| Repeat including the endpoint | `for number in 1..=3 { /* work */ }` |
| Return a function result | Final expression with no semicolon |
| Borrow an existing value | `&snack` |
| Write a comment | `// A note for people` |

## Words to recognize

**Variable:** a name for a value. **Type:** the kind of value, such as text or an integer. **Mutable:** allowed to change. **Condition:** a true/false question. **Loop:** repeated instructions. **Function:** a named job that can take inputs and return a result. **Argument:** a value supplied when you call a function. **Compile:** turn source code into a program, after checking it. **Terminal / Shell:** the place where you type commands.

For this course, the best debugging habit is: **save → read the first error → change one thing → rerun**.
