const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let numStr = String(num)
  let numbers = [];

  numStr.split('').forEach(n => {
    let added = numStr.replace(n, '')
    numbers.push(added)
  })

  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
