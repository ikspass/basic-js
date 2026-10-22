const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return _chain.length;
  },
  addLink(value) {
    let strLink = value === undefined ? '( )' : `(${value})`;
    _chain.push(strLink);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= _chain.length) {
      _chain.splice(position - 1, 1);
    } else {
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    _chain.reverse();
    return this;
  },
  finishChain() {
    let formattedChain = _chain.join('~~')
    _chain = [];
    return formattedChain;
  },
};

module.exports = {
  chainMaker,
};
