// Optional lesson: lessons/08-borrowing.md
// Run: cargo run --example 08_borrowing

fn inspect_snack(snack: &str) {
    println!("Inspecting: {snack}");
}

fn main() {
    let snack = String::from("cookie");

    inspect_snack(&snack);
    println!("Still mine: {snack}");

    // YOUR TURN: Inspect the snack twice, then change it to a different snack.
}
