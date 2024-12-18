# JavaScript Calculator with Limited Operations

This repository demonstrates a simple JavaScript calculator with a potential bug. The calculator currently only supports addition and subtraction, leading to unexpected behavior if other operations are used.

## Bug

The `calculate` function only handles '+' and '-' operations.  If any other operation is passed, it returns 'Invalid operation' instead of performing the calculation. This limits the functionality and robustness of the calculator.

## Solution

The solution expands the `switch` statement to include support for multiplication and division. Error handling is also improved to provide more informative messages to the user.

## How to Run

1. Clone this repository.
2. Open `index.html` (or the equivalent file) in your browser.

This example is intended to demonstrate a common type of programming error and its solution.  It highlights the importance of thorough testing and robust error handling.