'use strict';
const Node = require('./node.js');

class stacks {
  constructor(val) {
    this.val = val;
  }
  push() {}
  pop() {}
  peek() {}
  isEmpty() {}
}

class queues {
  constructor(val) {
    this.val = val;
  }
  enqueue() {}
  dequeue() {}
  peek() {}
  isEmpty() {}
}

module.exports = { stacks, queues };
