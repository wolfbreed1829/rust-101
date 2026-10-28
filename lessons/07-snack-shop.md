# 07 · Build a tiny snack shop

**About 20 minutes · Goal: combine the skills you have practiced.**

[← Functions](06-functions.md) · [Course home](../README.md) · [Optional next step →](08-borrowing.md)

Your shop takes its order from variables at the top of `main`. Edit those values to try a different customer or order. Keyboard input can wait for another lesson.

## Run the starter

Open **`examples/07_snack_shop.rs`** and run:

```sh
cargo run --example 07_snack_shop
```

The starter calculates the cost and decides whether the customer has enough money:

```text
Welcome, Sam!
Total: $6
Order approved!
```

Find the three `YOUR TURN` comments. Complete one at a time and rerun after each change. Use the previous lessons for examples.

## Build it

1. **Pack the order.** Inside the approved branch, use a `for` loop from `1..=quantity` to print `Packing cookie {number}` for each cookie.
2. **Give change.** After the loop, still inside the approved branch, calculate `budget - total`, store it in `change`, and print `Change: ${change}`.
3. **Explain the shortfall.** Inside the `else` branch, after the existing message, calculate `total - budget`, store it in `shortfall`, and print `You need ${shortfall} more.`.

Keep the starter's `customer = "Sam"`, `quantity = 3`, `price = 2`, and `budget = 10` for your first check.

## Check three cases

Save and rerun after each budget change.

**Case 1: budget is 10.** Expected completed output:

```text
Welcome, Sam!
Total: $6
Order approved!
Packing cookie 1
Packing cookie 2
Packing cookie 3
Change: $4
```

**Case 2: budget is 4.** Expected completed output:

```text
Welcome, Sam!
Total: $6
Not enough money yet.
You need $2 more.
```

**Case 3: budget is 6.** The order should be approved, all three cookies packed, and the last line should be `Change: $0`.

Use positive quantities and prices, and a budget of zero or more. Validating other inputs is outside this first lesson.

## Make it yours

Change the customer name and try a different quantity. Before running, calculate the expected total yourself. Then ask your partner to point out a variable, a function call, a condition, and a loop in your code.

**Done when:** all three cases work and you can explain why the packing loop belongs inside the approved branch.

That completes Rust 101. You have built a small program with real decisions and calculations.

[Hints and full solution](../docs/SOLUTIONS.md#07--snack-shop) · [Review your checklist](../README.md#3-know-when-you-are-done) · [Optional: borrow a snack →](08-borrowing.md)
