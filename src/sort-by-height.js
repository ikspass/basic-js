const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filteredArr = arr.filter(e => e !== -1);
  filteredArr.sort((a, b) => a - b);

  let resultArr = [];
  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      resultArr.push(filteredArr[sortedIndex]);
      sortedIndex++;
    } else {
      resultArr.push(-1)
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};
