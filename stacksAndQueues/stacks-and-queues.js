'use strict';
const Node = require('./node.js');

class Stacks {
  constructor(val) {
    this.val = val;
  }
  push() {}
  pop() {}
  peek() {}
  isEmpty() {
    if (!this.val) {
      return true;
    } else false;
  }
}

class Queues {
  constructor(val) {
    this.val = val;
  }
  enqueue() {}
  dequeue() {}
  peek() {}
  isEmpty() {
    if (!this.val) {
      return true;
    } else false;
  }
}

module.exports = { Stacks, Queues };
