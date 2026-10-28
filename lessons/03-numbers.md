# 03 · Count your snacks

**About 10 minutes · Goal: change a value and do a calculation.**

[← Variables](02-variables.md) · [Course home](../README.md) · [Next: decisions →](04-decisions.md)

## Read

Open **`examples/03_numbers.rs`**:

```rust
fn main() {
    let mut cookies = 3;
    cookies += 2;

    let price = 2;
    let total = cookies * price;

    println!("Cookies: {cookies}");
    println!("Total: ${total}");
}
```

A variable made with `let` is **immutable** by default: you cannot assign a new value to that variable. Add `mut` (short for mutable) when you want to change it.

`cookies += 2;` means “add 2 to cookies and store the new value in cookies.” It does the same job as `cookies = cookies + 2;`.

| Symbol | Meaning | Example |
| --- | --- | --- |
| `+` | Add | `3 + 2` is `5` |
| `-` | Subtract | `5 - 1` is `4` |
| `*` | Multiply | `4 * 2` is `8` |

We use whole-dollar prices to keep the arithmetic simple. The `$` in the printed message is ordinary text.

## Predict, then run

How many cookies are there after the addition? What is their total price?

```sh
cargo run --example 03_numbers
```

Expected program output:

```text
Cookies: 5
Total: $10
```

## Your turn

1. After `cookies += 2;`, add `cookies -= 1;`. Someone ate a cookie. The investigation continues.
2. Save and rerun the example. Expect:

   ```text
   Cookies: 4
   Total: $8
   ```

3. For a short experiment, remove `mut` from the first line. Run again and find the error about assigning to an immutable variable.
4. Put `mut` back and run again so you finish with working code.

The order of instructions matters. Calculate `total` **after** changing `cookies`; a calculation is performed at that point in the program, not automatically updated later like a spreadsheet formula.

## Check yourself

Why does `cookies` need `mut`, while `price` does not?

**Done when:** your program prints 4 cookies and an $8 total, with no error.

[Hint and answer](../docs/SOLUTIONS.md#03--numbers) · [Next: make a decision →](04-decisions.md)
