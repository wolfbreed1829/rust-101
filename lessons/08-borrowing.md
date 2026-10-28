# 08 · Optional: borrow a snack

**About 10 extra minutes · Goal: recognize an owned `String` and a shared reference.**

[← Snack shop](07-snack-shop.md) · [Course home](../README.md)

Take this step when the earlier lessons feel comfortable. It introduces one Rust idea; you do not need to master all of ownership today.

## Read

Open **`examples/08_borrowing.rs`**:

```rust
fn inspect_snack(snack: &str) {
    println!("Inspecting: {snack}");
}

fn main() {
    let snack = String::from("cookie");

    inspect_snack(&snack);
    println!("Still mine: {snack}");
}
```

`String::from("cookie")` creates an owned text value. The variable `snack` owns that `String`.

`&snack` passes a **shared reference**: the function can read the text while the caller keeps ownership. The function accepts `&str`, a reference to text. Rust can turn a shared reference to our `String` into the `&str` this function needs.

Think “look at my snack” rather than “take my snack.” This shared reference does not let the function change the text.

## Predict, then run

Can `main` still print `snack` after the function call?

```sh
cargo run --example 08_borrowing
```

Expected program output:

```text
Inspecting: cookie
Still mine: cookie
```

## Your turn

1. Add a second `inspect_snack(&snack);` before the final print.
2. Change `"cookie"` to `"popcorn"`.
3. Save and run. Expect:

   ```text
   Inspecting: popcorn
   Inspecting: popcorn
   Still mine: popcorn
   ```

## A short contrast: moving ownership

Read this separate example. You do not need to replace your lesson file:

```rust
fn main() {
    let snack = String::from("cookie");
    let new_owner = snack;
    println!("New owner has: {new_owner}");
    // println!("Old owner has: {snack}"); // Would fail: the String moved.
}
```

Assigning this `String` to `new_owner` **moves** ownership, so `snack` cannot be used afterward. This is different from borrowing with `&`. Simple values such as the `i32` integers we used earlier can be copied instead; not every assignment moves a value.

**Done when:** you can say why the first program can inspect the same snack twice.

[Hint and answer](../docs/SOLUTIONS.md#08--borrowing) · [Return to the course](../README.md)
