// Lesson 03: lessons/03-numbers.md
// Run: cargo run --example 03_numbers

fn main() {
    let mut cookies = 3;
    cookies += 2;

    let price = 2;
    let total = cookies * price;

    println!("Cookies: {cookies}");
    println!("Total: ${total}");

    // YOUR TURN: Eat one cookie before calculating the total.
}
