const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      let mines = 0;

      for (let dr = -1; dr <= 1; dr++) {
        if (r + dr < 0 || r + dr >= matrix.length) continue;
        
        for (let dc = -1; dc <= 1; dc++) {
          if (c + dc < 0 || c + dc >= matrix[r].length) continue;
          if (dr === 0 && dc === 0) continue;

          if (matrix[r + dr][c + dc] == true) {
            mines++;
          }
        }
        resultMatrix[r][c] = mines;
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
