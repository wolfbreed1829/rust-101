# Rust 101: small steps, extra snacks

**Start with two lines of output. Finish with your own tiny snack shop.**

**[Try the live browser demo →](https://wolfbreed1829.github.io/rust-101/)** Run the Rust examples immediately, then follow the setup guide below to edit your own code.

This is a hands-on first lesson for someone who has never written Rust. You can use **Replit in a browser** or **VS Code on your computer**. Both learners use the same files, commands, and exercises.

Allow **75–90 minutes**, plus setup. Take breaks or split it into two sessions. No previous Rust or Git experience is needed.

## 1. Get ready

Choose your setup guide:

| Where you are working | Start here |
| --- | --- |
| Replit.com | [Set up in Replit](docs/SETUP-REPLIT.md) |
| VS Code | [Set up in VS Code](docs/SETUP-VSCODE.md) |

Keep these lesson pages open on GitHub while you edit your own copy. You do not need to edit files on GitHub.

After setup, type this into your **terminal** (VS Code) or **Shell** (Replit), then press Enter:

```sh
cargo run
```

You should see these lines, possibly below some build messages:

```text
Hello, Rust!
My code has entered the chat.
```

That is your first working Rust program. [Start lesson 01 →](lessons/01-hello.md)

## 2. Follow the lessons in order

For each lesson: **read → predict → run → change → run again → explain**. Change one thing at a time. Every starter already works, so you always have somewhere to begin.

| Step | What you will learn | File you edit | Run command |
| --- | --- | --- | --- |
| [01 · Say hello](lessons/01-hello.md) | Print text; find `main` | `src/main.rs` | `cargo run` |
| [02 · Name your data](lessons/02-variables.md) | Variables, text, numbers, booleans | `examples/02_variables.rs` | `cargo run --example 02_variables` |
| [03 · Count your snacks](lessons/03-numbers.md) | `mut` and arithmetic | `examples/03_numbers.rs` | `cargo run --example 03_numbers` |
| [04 · Make a decision](lessons/04-decisions.md) | `if` / `else` | `examples/04_decisions.rs` | `cargo run --example 04_decisions` |
| [05 · Repeat yourself](lessons/05-loops.md) | A `for` loop | `examples/05_loops.rs` | `cargo run --example 05_loops` |
| [06 · Reuse a calculation](lessons/06-functions.md) | Functions, inputs, return values | `examples/06_functions.rs` | `cargo run --example 06_functions` |
| [07 · Build a snack shop](lessons/07-snack-shop.md) | Put the basics together | `examples/07_snack_shop.rs` | `cargo run --example 07_snack_shop` |
| [08 · Optional: borrow a snack](lessons/08-borrowing.md) | A first look at ownership | `examples/08_borrowing.rs` | `cargo run --example 08_borrowing` |

**Important:** `cargo run` always runs `src/main.rs`. To run a later lesson, use its full `--example` command. Leave off `.rs` in the command. You can run these commands in either editor.

## 3. Know when you are done

- [ ] I can edit, save, and run a Rust file.
- [ ] I can print a message containing a variable.
- [ ] I can change a value using `let mut`.
- [ ] I can choose between two paths with `if` / `else`.
- [ ] I can repeat work with a `for` loop.
- [ ] I can call a function that returns a number.
- [ ] My snack shop handles an affordable and an unaffordable order.
- [ ] I can explain one line of my own code to my learning partner.

Ownership is an optional next step. Finishing lesson 07 completes the main lesson.

## Need a hand?

- [Troubleshooting](docs/TROUBLESHOOTING.md): start with the first error, then run again.
- [Pocket reference](docs/CHEAT-SHEET.md): the commands and syntax used here.
- [Hints and solutions](docs/SOLUTIONS.md): try first, then open the answer you need.
- [Facilitator notes](docs/TEACHING.md): pacing, discussion prompts, and a message to send learners.

The source code has no third-party dependencies. `Cargo.toml` describes the project; `Cargo.lock` records dependency resolution; `target/` holds generated build files. You only need to edit the `.rs` file named by each lesson.

For more practice after the lesson, see the official [Rust Book](https://doc.rust-lang.org/book/).
