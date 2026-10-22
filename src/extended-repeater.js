const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  if (str === undefined) return 'Error'
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let mainStr = String(str);
  let addStr = String(addition);
  let resultStr = '';
  let additionStr = '';

  for(let i = 1; i <= additionRepeatTimes; i++) {
    additionStr += addStr;
    if (i !== additionRepeatTimes) {
      additionStr += additionSeparator;
    }
  }

  for (let i = 1; i <= repeatTimes; i++) {
    resultStr += mainStr + additionStr;
    if (i !== repeatTimes) {
      resultStr += separator;
    }
  }

  return resultStr;
}

module.exports = {
  repeater
};
