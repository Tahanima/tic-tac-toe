const empty = 2;
let grid = [[empty, empty, empty], [empty, empty, empty], [empty, empty, empty]];
let [player, filledCells, r, c] = [0, 0];

let hasWon = (row, col) => {
  if (grid[row][0] == grid[row][1] && grid[row][1] == grid[row][2]) { return true; }

  if (grid[0][col] == grid[1][col] && grid[1][col] == grid[2][col]) { return true; }

  if (row == col) {
    if(grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) { return true; }
  }

  if ((row == col && row == 1) || (Math.min(row, col) == 0 && Math.max(row, col) == 2)) {
    if(grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) { return true; }
  }

  return false;
};

let cleanup = () => {
  [player, filledCells] = [0, 0];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) { grid[i][j] = empty; }
  }

  const prefix = "#cell_";
  const suffix = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (const value of suffix) {
    $(`${prefix}${value}`).html("");
  }
};

let assess = elem => {
  if (grid[r][c] == empty) {
    player == 0 ? $(elem).html("X") : $(elem).html("O");
    
    grid[r][c] = player;
    filledCells++;
    player = 1 - player;

    if (hasWon(r, c) == true) {
      alert(`Congratulations! Player ${2 - player} won`);
      cleanup();
    } else if (filledCells == 9) {
      alert("Game ended with a tie!");
      cleanup();
    }

    player == 0 ? $("#player").html("1 (X)") : $("#player").html("2 (O)");

    if (player == 0) {
      $("span").removeClass("player-two");
      $("span").addClass("player-one");
    } else {
      $("span").removeClass("player-one");
      $("span").addClass("player-two");
    }
  }
};

$("#cell_one").click(function() {
  [r, c] = [0, 0];
  assess("#cell_one");
});

$("#cell_two").click(function() {
  [r, c] = [0, 1];
  assess("#cell_two");
});

$("#cell_three").click(function() {
  [r, c] = [0, 2];
  assess("#cell_three");
});

$("#cell_four").click(function() {
  [r, c] = [1, 0];
  assess("#cell_four");
});

$("#cell_five").click(function() {
  [r, c] = [1, 1];
  assess("#cell_five");
});

$("#cell_six").click(function() {
  [r, c] = [1, 2];
  assess("#cell_six");
});

$("#cell_seven").click(function() {
  [r, c] = [2, 0];
  assess("#cell_seven");
});

$("#cell_eight").click(function() {
  [r, c] = [2, 1];
  assess("#cell_eight");
});

$("#cell_nine").click(function() {
  [r, c] = [2, 2];
  assess("#cell_nine");
});
