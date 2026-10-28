# 02 · Name your data

**About 10 minutes · Goal: store values and print them.**

[← Hello](01-hello.md) · [Course home](../README.md) · [Next: numbers →](03-numbers.md)

## Read

Open **`examples/02_variables.rs`**. An example is a small, separate program in this project.

```rust
fn main() {
    let name = "Sam";
    let cookies = 3;
    let learning_rust = true;

    println!("Hi, {name}!");
    println!("Cookies: {cookies}");
    println!("Learning Rust: {learning_rust}");
}
```

`let` creates a variable: a name for a value. Read `let cookies = 3;` as “give the value 3 the name cookies.” In `println!`, `{cookies}` inserts that variable's value into the message.

Values have **types**, which describe what kind of data they hold:

| Value | Kind of data | Rust type in this example |
| --- | --- | --- |
| `"Sam"` | Text in quotes | `&str` (a reference to text) |
| `3` | A whole number | `i32` |
| `true` | A yes/no value, called a boolean | `bool` |

Rust can infer these types from your code. You do not need to write them here. `true` and `false` have no quotation marks.

## Predict, then run

Will the output show `{name}` or `Sam`?

```sh
cargo run --example 02_variables
```

Expected program output:

```text
Hi, Sam!
Cookies: 3
Learning Rust: true
```

## Your turn

1. Change the name to `Alex` and the cookie count to `5`.
2. Add `let snack = "popcorn";` below the other `let` lines.
3. Add `println!("Favorite snack: {snack}");` below the other printing lines.
4. Save and run this lesson's command again.

Expected result:

```text
Hi, Alex!
Cookies: 5
Learning Rust: true
Favorite snack: popcorn
```

## Check yourself

What is the difference between `5` and `"5"`? The first is a number; the second is text. Rust does not treat them as interchangeable.

**Done when:** your output includes all four values. Explain what `let` does to your partner.

[Hint and answer](../docs/SOLUTIONS.md#02--variables) · [Next: count your snacks →](03-numbers.md)
