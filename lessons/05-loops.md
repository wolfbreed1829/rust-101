# 05 · Repeat yourself

**About 8 minutes · Goal: repeat an instruction with a `for` loop.**

[← Decisions](04-decisions.md) · [Course home](../README.md) · [Next: functions →](06-functions.md)

## Read

Open **`examples/05_loops.rs`**:

```rust
fn main() {
    for number in 1..=3 {
        println!("Packing cookie {number}");
    }

    println!("Order ready!");
}
```

`1..=3` is a range including 1, 2, and 3. The loop gives `number` each value in turn and runs the instructions inside its braces once for each value.

The final print is **outside** the loop. It runs once after all cookies are packed. Even the computer deserves a break from repeating itself.

## Predict, then run

How many packing lines will you see? How many “Order ready!” lines?

```sh
cargo run --example 05_loops
```

Expected program output:

```text
Packing cookie 1
Packing cookie 2
Packing cookie 3
Order ready!
```

## Your turn

Change the range to `1..=5`. Save and run:

```text
Packing cookie 1
Packing cookie 2
Packing cookie 3
Packing cookie 4
Packing cookie 5
Order ready!
```

For a quick experiment, try `1..5` without the equals sign. You will pack 1 through 4: `..` leaves out the end value. Put `1..=5` back afterward.

## Check yourself

Point to the closing brace that ends the loop. What would happen if “Order ready!” were inside it?

**Done when:** there are five packing messages and exactly one final message.

[Hint and answer](../docs/SOLUTIONS.md#05--loops) · [Next: reuse a calculation →](06-functions.md)
