# Facilitator notes

[← Course home](../README.md)

## Send this to your learners

> Here is our Rust 101 lesson: https://github.com/wolfbreed1829/rust-101
>
> Start with the setup guide for your editor: Replit or VS Code. Get `cargo run` working, then begin lesson 01. Each lesson tells you which file to edit, the command to run, and what the output should look like. Take your time; the goal is to explain your changes, not finish fastest. We will end by building a tiny snack shop.

## Before the session

Have both learners finish setup and show the two-line greeting. Installation time varies; allow a separate 15–30 minutes and help if necessary. For Replit, check a fresh import in the learner's account before class. Its editor and dependency provisioning can vary by workspace.

Each learner works in their own copy. The GitHub repository is the shared starting point. Editing an imported Replit project or local ZIP does not automatically update the teaching repository.

## Pacing

| Segment | Suggested time |
| --- | --- |
| 01: print and run | 8 minutes |
| 02: variables and types | 10 minutes |
| 03: mutation and arithmetic | 10 minutes |
| 04: decisions | 10 minutes |
| 05: loops | 8 minutes |
| 06: functions | 12 minutes |
| 07: snack shop | 20 minutes |
| Optional 08: ownership and borrowing | 10 extra minutes |

For two shorter sessions, pause after decisions. At the start of the next session, ask each learner to recreate one variable and one `if` statement before moving on.

## Teaching rhythm

Ask learners to predict output before running. Let each person make the change themselves, then explain it to the other. If one finishes early, ask them to invent a new input and predict the result while the other catches up.

When an error happens, ask: “What is the first error telling us? Which file and line does it name?” Make the deliberate immutable-variable error in lesson 03 a normal part of learning.

Keep ownership, lifetimes, enums, package installation, keyboard input, and Git branching for later. The main lesson is complete when the learner can build and explain lesson 07.

## Quick understanding checks

- After variables: “Is `"5"` a number we can multiply here?”
- After mutation: “Why does `price` not need `mut`?”
- After decisions: “What happens when the budget exactly matches the total?”
- After loops: “Why does the final message appear only once?”
- After functions: “What are the inputs, and what comes back?”
- After the project: “Why do we pack cookies inside the approved branch?”

Answers and complete example solutions are in [SOLUTIONS.md](SOLUTIONS.md). The project check is three cases: budget 10, budget 4, and budget 6, with quantity 3 and price 2.

## Maintaining this lesson

After editing examples, run `cargo fmt --check` and `cargo build --all-targets`, then run each command in the README and compare its output to its lesson page. Check any changed solution snippets too. GitHub Actions builds and runs all starter programs on Windows and Linux.

The starter files deliberately contain incomplete *features*, not deliberate compilation failures. Learners should get a successful first run before making changes.
