const readline = require("readline");

function printGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    // Join each row's elements into a string
    const rowStr = grid[i].join(" | ");

    // Print the row
    console.log(rowStr);

    // Print horizontal line after each row, except for the last row
    if (i < grid.length - 1) {
      console.log("-".repeat(rowStr.length));
    }
  }
}

function createGrid(dimension, initialValue) {
  /* This function should create an array of "dimension" number of elements
   * where each element is another array which of length "dimension" and
   * all its values are set to `initialValue`.
   */
}

function checkWordFitsGrid(grid, word, row, col, direction) {
  /*
   * This function should check if the word goes beyond the boundaries
   * of the grid. `row` and `col` are supposed to be the starting coordinates
   * for the word.
   *
   * The return value can be true/false _or_ you can throw an error.
   */
}

function checkGridSpaceIsEmptyOrMatching(grid, row, col, letter) {
  /*
   * This function checks if the item in the grid at location [row][col] is
   * empty _or_ matches the `letter`.
   *
   * The return value can be true/false _or_ you can throw an error.
   */
}

function getNextCell(row, col, direction) {
  /*
   * Returns an array of two items which is the next `row` and `col`
   * coordinates for the given direction. For instance, if the current
   * row and col is (0,0) and the direction is across then the next
   * values should be (0,1)
   */
}

function addWordToGrid(grid, word, row, col, direction) {
  /*
   * 1. Check that the word fits into the grid
   * 2. Loop over each letter in the word:
   *    - check the cell is empty of matching
   *    - put the letter into the grid
   *    - get the next row and column
   */
}

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle user input
function getUserInput(grid) {
  rl.question("Enter a word: ", (word) => {
    rl.question("Enter start row: ", (startRow) => {
      rl.question("Enter start column: ", (startCol) => {
        rl.question("Enter direction (across or down): ", (direction) => {
          // Process the input
          addWordToGrid(
            grid,
            word,
            parseInt(startRow),
            parseInt(startCol),
            direction,
          );
          printGrid(grid);

          // Ask if the user wants to continue
          rl.question("Do you want to continue? (yes/no): ", (answer) => {
            if (answer.toLowerCase() === "yes") {
              // Continue asking for input
              getUserInput(grid);
            } else {
              // Exit the program
              console.log("Exiting the program...");
              rl.close();
            }
          });
        });
      });
    });
  });
}

console.log("Welcome to crossword maker");
rl.question("Enter a grid dimension: ", (answer) => {
  grid = createGrid(parseInt(answer), " ");
  printGrid(grid);
  getUserInput(grid);
});
