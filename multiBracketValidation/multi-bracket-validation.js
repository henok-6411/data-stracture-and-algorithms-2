'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class MultiBracket {
  constructor() {
    this.top = null;
  }
  push(val) {
    let newValue = new Node(val);
    if (!this.top) {
      this.top = newValue;
      return newValue;
    } else {
      newValue.next = this.top;
      this.top = newValue;
    }
  }
  pop() {
    let popNode = this.top;
    if (!this.top) {
      throw 'THERE IS NO VALUE';
    } else {
      this.top = this.top.next;
      popNode.next = null;
      return popNode;
    }
  }
  peek() {
    if (!this.top) {
      throw 'THERE IS NO VALUE';
    } else {
      return this.top.val;
    }
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      false;
    }
  }
  BooleanValidater(val) {
    let newValue = new Node(val);
    let current;
    let previous;
    for (let i = 0; i < newValue.length; i++) {
      current = this.newValue.charAt(i);
      if (current === '(' || current === '[' || current === '{') {
        this.push(current);
      } else if (current === ')' || current === ']' || current === '}') {
        if (this.isEmpty()) {
          return false;
        } else {
          previous = this.top.peek();
          if (
            (current === ')' && previous === ')') ||
            (current === '[' && previous === ']') ||
            (current === '{' && previous === '}')
          ) {
            this.top.pop();
          }
        }
      }
    }
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = MultiBracket;
