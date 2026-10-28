// Lesson 06: lessons/06-functions.md
// Run: cargo run --example 06_functions

fn order_total(quantity: i32, price: i32) -> i32 {
    quantity * price
}

fn main() {
    let total = order_total(3, 2);
    println!("Total: ${total}");

    // YOUR TURN: Add a second order: four cookies at three dollars each.
}
