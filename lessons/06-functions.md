# 06 · Reuse a calculation

**About 12 minutes · Goal: give a function inputs and use its result.**

[← Loops](05-loops.md) · [Course home](../README.md) · [Next: your snack shop →](07-snack-shop.md)

## Read

Open **`examples/06_functions.rs`**:

```rust
fn order_total(quantity: i32, price: i32) -> i32 {
    quantity * price
}

fn main() {
    let total = order_total(3, 2);
    println!("Total: ${total}");
}
```

A function lets you name a job and use it again. Here is the first line in pieces:

| Piece | Meaning |
| --- | --- |
| `fn order_total` | Define a function named `order_total` |
| `quantity: i32` | First input: a whole number named `quantity` |
| `price: i32` | Second input: a whole number named `price` |
| `-> i32` | Return a whole number as the answer |

`i32` is a signed 32-bit integer, a whole-number type that can represent positive and negative values within a fixed range. Unlike our earlier `let` variables, function inputs need their types written down.

`order_total(3, 2)` **calls** the function with 3 and 2. The function multiplies them and gives back 6. Then `let total = ...` stores that answer.

Notice that `quantity * price` has **no semicolon**. A final expression without a semicolon supplies the function's return value. The calling line `let total = order_total(3, 2);` does have one.

## Predict, then run

The function is written above `main`, but the program still starts at `main`. How much will three cookies at $2 each cost?

```sh
cargo run --example 06_functions
```

Expected program output:

```text
Total: $6
```

## Your turn

Below the existing print inside `main`, add:

```rust
let second_total = order_total(4, 3);
println!("Second total: ${second_total}");
```

Save and run. Expect:

```text
Total: $6
Second total: $12
```

## Check yourself

What would `order_total(2, 5)` return? Does the function print anything, or does `main` do the printing?

**Done when:** the same function calculates two different orders.

[Hint and answer](../docs/SOLUTIONS.md#06--functions) · [Next: build your snack shop →](07-snack-shop.md)
