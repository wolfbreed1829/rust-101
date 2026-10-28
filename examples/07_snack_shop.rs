// Lesson 07: lessons/07-snack-shop.md
// Run: cargo run --example 07_snack_shop
// This starter already runs. Complete one YOUR TURN at a time.

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
        // YOUR TURN 1: Print one packing message per cookie with a for loop.
        // YOUR TURN 2: Calculate the change and print it.
    } else {
        println!("Not enough money yet.");
        // YOUR TURN 3: Calculate and print how much more money is needed.
    }
}
