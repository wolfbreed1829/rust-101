# Hints and solutions

[← Course home](../README.md)

Try the exercise first. Open a hint before looking at the full answer. Each full answer below is a complete replacement for that lesson's `.rs` file. You can compare it with your code without replacing anything.

## 01 · Say hello

<details>
<summary>Hint</summary>

Keep your new printing line between the opening and closing braces of `main`. Give it a semicolon.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn main() {
    println!("Hello, Sam!");
    println!("My code has entered the chat.");
    println!("I can run Rust!");
}
```

Rust runs these instructions in order, so moving the last print above the others makes it appear first.

</details>

## 02 · Variables

<details>
<summary>Hint</summary>

Create the snack with `let snack = "popcorn";`. Print it using `{snack}` inside your message.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn main() {
    let name = "Alex";
    let cookies = 5;
    let learning_rust = true;
    let snack = "popcorn";

    println!("Hi, {name}!");
    println!("Cookies: {cookies}");
    println!("Learning Rust: {learning_rust}");
    println!("Favorite snack: {snack}");
}
```

`5` is a number you can use in arithmetic. `"5"` is text. `let` binds a name to a value.

</details>

## 03 · Numbers

<details>
<summary>Hint</summary>

Subtract the eaten cookie before calculating `total`. Keep `mut` on the variable whose value changes.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn main() {
    let mut cookies = 3;
    cookies += 2;
    cookies -= 1;

    let price = 2;
    let total = cookies * price;

    println!("Cookies: {cookies}");
    println!("Total: ${total}");
}
```

`cookies` changes during the program, so it needs `mut`. `price` is assigned once. The result is 4 cookies at $2 each: $8.

</details>

## 04 · Decisions

<details>
<summary>Hint</summary>

Print the budget before the `if` so that line appears regardless of which branch runs. `>=` accepts equality.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn main() {
    let budget = 10;
    let total = 10;

    println!("Budget: ${budget}");
    if budget >= total {
        println!("Snack approved!");
    } else {
        println!("Save a little more.");
    }
}
```

Budgets of 10 and 12 both approve the $10 snack. A budget of 8 does not. With `>` instead of `>=`, exactly 10 would fail the condition.

</details>

## 05 · Loops

<details>
<summary>Hint</summary>

Use `1..=5`. Place the final print after the loop's closing brace but before `main`'s closing brace.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn main() {
    for number in 1..=5 {
        println!("Packing cookie {number}");
    }

    println!("Order ready!");
}
```

There are five packing lines. Putting “Order ready!” inside the loop would print it five times too.

</details>

## 06 · Functions

<details>
<summary>Hint</summary>

Call the existing function again with different inputs. Leave the multiplication without a semicolon so it returns its result.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn order_total(quantity: i32, price: i32) -> i32 {
    quantity * price
}

fn main() {
    let total = order_total(3, 2);
    println!("Total: ${total}");

    let second_total = order_total(4, 3);
    println!("Second total: ${second_total}");
}
```

The totals are $6 and $12. `order_total(2, 5)` returns 10. The calculation function returns a number; the printing happens in `main`.

</details>

## 07 · Snack shop

<details>
<summary>Hint 1: packing</summary>

Use the loop from lesson 05 with `quantity` as the endpoint. Put it inside the approved branch so you only pack an affordable order.

</details>

<details>
<summary>Hint 2: money</summary>

In the approved branch, `change` is `budget - total`. In the other branch, `shortfall` is `total - budget`. Print each after calculating it.

</details>

<details>
<summary>Show the full solution</summary>

```rust
fn order_total(quantity: i32, price: i32) -> i32 {
    quantity * price
}

fn main() {
    let customer = "Sam";
    let quantity = 3;
    let price = 2;
    let budget = 10;
    let total = order_total(quantity, price);

    println!("Welcome, {customer}!");
    println!("Total: ${total}");

    if budget >= total {
        println!("Order approved!");
        for number in 1..=quantity {
            println!("Packing cookie {number}");
        }
        let change = budget - total;
        println!("Change: ${change}");
    } else {
        println!("Not enough money yet.");
        let shortfall = total - budget;
        println!("You need ${shortfall} more.");
    }
}
```

With quantity 3 and price 2, the total is $6. Budget 10 gives $4 change. Budget 4 prints a $2 shortfall and packs nothing. Budget 6 approves and gives $0 change.

</details>

## 08 · Borrowing

<details>
<summary>Hint</summary>

Call `inspect_snack(&snack);` a second time. Each call borrows the text; neither takes ownership.

</details>

<details>
<summary>Show one solution</summary>

```rust
fn inspect_snack(snack: &str) {
    println!("Inspecting: {snack}");
}

fn main() {
    let snack = String::from("popcorn");

    inspect_snack(&snack);
    inspect_snack(&snack);
    println!("Still mine: {snack}");
}
```

`main` keeps ownership of the `String`, so it can lend out a shared reference again and still use the text afterward.

</details>
