# 04 · Make a decision

**About 10 minutes · Goal: choose what happens based on a condition.**

[← Numbers](03-numbers.md) · [Course home](../README.md) · [Next: loops →](05-loops.md)

## Read

Open **`examples/04_decisions.rs`**:

```rust
fn main() {
    let budget = 8;
    let total = 10;

    if budget >= total {
        println!("Snack approved!");
    } else {
        println!("Save a little more.");
    }
}
```

`if` asks whether a condition is true. `>=` means “greater than or equal to.” If you have enough money, the first block runs. Otherwise, the `else` block runs. Exactly one of these two blocks runs.

Other useful comparisons are `<` (less than), `>` (greater than), and `==` (equal to). A single `=` assigns a value; `==` compares two values.

## Predict, then run

Can a budget of $8 cover a $10 total?

```sh
cargo run --example 04_decisions
```

Expected program output:

```text
Save a little more.
```

## Your turn

1. Change `budget` to `12`. Save and run. Expect `Snack approved!`.
2. Change `budget` to `10`. Predict, then run. It should still approve: `>=` includes equality.
3. Add `println!("Budget: ${budget}");` above the `if` line.
4. Leave the budget at `10`. Your final output should be:

   ```text
   Budget: $10
   Snack approved!
   ```

You changed the source code between runs, so `budget` still does not need `mut`. `mut` permits reassignment **during one run**.

## Check yourself

If you replaced `>=` with `>`, would exactly $10 be enough? Explain before trying it, then restore `>=`.

**Done when:** you have seen both messages by trying different budgets.

[Hint and answer](../docs/SOLUTIONS.md#04--decisions) · [Next: repeat yourself →](05-loops.md)
