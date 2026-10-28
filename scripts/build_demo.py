"""Build the original Rust starters for the browser; no Python dependencies."""

import json
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "demo" / "generated"
LESSONS = [
    ("01", "Say hello", "Your first Rust program", "src/main.rs", "01-hello", "8 min",
     "A program starts in main. Each println! sends a line of text to the console.",
     "Change the greeting to your name, then add a third message.",
     "Which line runs first? What happens if you swap the two messages?"),
    ("02", "Name your data", "Variables & types", "examples/02_variables.rs", "02-variables", "10 min",
     "Give values a name with let. Put a variable inside braces to include it in a message.",
     "Change the name and cookie count. Add a variable for your favorite snack.",
     "How is the number 5 different from the text \"5\"?"),
    ("03", "Count your snacks", "Mutation & math", "examples/03_numbers.rs", "03-numbers", "10 min",
     "Use mut when a value needs to change. Calculate the total after counting your cookies.",
     "Eat one cookie: add cookies -= 1; before calculating the total.",
     "Why does cookies need mut, while price does not?"),
    ("04", "Make a decision", "If & else", "examples/04_decisions.rs", "04-decisions", "10 min",
     "Ask a true-or-false question with if. One branch runs when it is true; the other runs when it is false.",
     "Try budgets of 12 and 10. Print the budget above the decision.",
     "Would exactly $10 be enough if you used > instead of >=?"),
    ("05", "Repeat yourself", "For loops", "examples/05_loops.rs", "05-loops", "8 min",
     "A for loop repeats instructions. The range 1..=3 includes 1, 2, and 3.",
     "Pack five cookies. Keep the final message outside the loop.",
     "How many times does Order ready! appear, and why?"),
    ("06", "Reuse a calculation", "Functions", "examples/06_functions.rs", "06-functions", "12 min",
     "Give a function two numbers and get a result back. The final expression returns the answer.",
     "Call order_total again for four cookies at three dollars each.",
     "Does order_total print the answer, or does main do that?"),
    ("07", "Build a snack shop", "Your mini project", "examples/07_snack_shop.rs", "07-snack-shop", "20 min",
     "This starter already calculates a total and checks the budget. Your job is to finish the shop.",
     "Add a packing loop, calculate change, and show the shortfall when an order costs too much.",
     "Try budgets of 10, 4, and 6. Why should packing happen inside the approved branch?"),
    ("08", "Borrow a snack", "Optional next step", "examples/08_borrowing.rs", "08-borrowing", "10 min",
     "Pass a shared reference with &. The function can read the snack while main keeps ownership.",
     "Inspect the snack twice, then change the snack to popcorn.",
     "Why can main still use the snack after the function call?"),
]


def main():
    subprocess.run(
        ["cargo", "build", "--release", "--target", "wasm32-wasip1", "--bins", "--examples", "--locked"],
        cwd=ROOT, check=True,
    )
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = []
    for number, title, topic, source, page, duration, explanation, exercise, question in LESSONS:
        stem = Path(source).stem
        build_dir = ROOT / "target" / "wasm32-wasip1" / "release"
        artifact = build_dir / "rust_101.wasm" if number == "01" else build_dir / "examples" / f"{stem}.wasm"
        wasm_name = f"lesson-{number}.wasm"
        shutil.copyfile(artifact, OUTPUT / wasm_name)
        code = (ROOT / source).read_text(encoding="utf-8")
        manifest.append(dict(
            id=number, title=title, topic=topic, source=source, page=page,
            duration=duration, explanation=explanation, exercise=exercise, question=question,
            code=code, wasm=f"generated/{wasm_name}",
            command="cargo run" if number == "01" else f"cargo run --example {stem}",
        ))
    (OUTPUT / "lessons.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"Built {len(manifest)} real Rust programs in {OUTPUT}")


if __name__ == "__main__":
    main()
