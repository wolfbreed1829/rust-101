# When something goes wrong

[← Course home](../README.md)

Save your file first. Read the **first error** in the output. Find the file and line number it names, fix one thing, and run again. One missing symbol can cause several later messages.

| What you see | What to try |
| --- | --- |
| `cargo` is not found or recognized | VS Code: install Rust and reopen VS Code and its terminal. Replit: check the included configuration and follow [Replit setup](SETUP-REPLIT.md#if-rust-is-missing). |
| Could not find `Cargo.toml` | Your terminal is in the wrong folder. Open the folder that directly contains `Cargo.toml`, then open a new terminal there. In Replit Shell, `ls` should show it; in Windows PowerShell, use `dir`. |
| `link.exe` not found on Windows | Finish the Visual Studio C++ Build Tools installation requested by Rust. Include the Desktop development with C++ tools and a Windows SDK. Restart VS Code. See the official [Rust Windows prerequisites](https://rust-lang.github.io/rustup/installation/windows-msvc.html). |
| A linker/`cc` error on Mac or Linux | Complete the system build-tool prerequisites in the [Rust Book installation guide](https://doc.rust-lang.org/book/ch01-01-installation.html). |
| `expected ...`, a missing `;`, or an unclosed delimiter | Compare the punctuation with the lesson: double quotes, parentheses, braces, and semicolons. |
| Cannot assign twice to immutable variable | A value is being reassigned. Use `let mut` for that variable, as in lesson 03. |
| Mismatched types, expected `i32`, found `()` | In lesson 06, check whether you added a semicolon after the function's final `quantity * price` expression. Remove that semicolon to return the number. |
| Cannot find a variable in this scope | Check spelling and capitalization. Create it before using it, inside the block where it is needed. |
| No example target named ... | Copy the exact `--example` name from the lesson. Do not include `.rs`. |
| The output never changes | Save the file, then check the command. `cargo run` runs `src/main.rs`; later lessons need their `--example` command. |
| Replit's web preview is blank | Read the text in Shell or Console. These programs do not serve a webpage. |
| Yellow warning about an unused variable | Use that variable in a print or calculation. A warning is different from an error; the program may still run. |

## Read a Rust error

In this intentionally broken code, `cookies` is immutable:

```rust,compile_fail
fn main() {
    let cookies = 3;
    cookies += 2;
    println!("Cookies: {cookies}");
}
```

The compiler reports that it cannot assign twice to the immutable variable `cookies` and may suggest `mut`. Fix the declaration to `let mut cookies = 3;`, save, and rerun.

## Still stuck?

Send your facilitator these three things: the command you ran, the file you edited, and the first complete error message. Include the relevant lines of code. “It broke” gives the detective very little to work with.
