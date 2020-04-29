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
}

const BooleanValidater = (val) => {
  let newValue = new MultiBracket();
  let newValueSplit = val.split('');

  for (let i = 0; i < newValueSplit.length; i++) {
    if (
      newValueSplit[i] === '(' ||
      newValueSplit[i] === '[' ||
      newValueSplit[i] === '{'
    ) {
      newValue.push(newValueSplit[i]);
      console.log(newValue.val);
    } else if (
      newValueSplit[i] === ')' ||
      newValueSplit[i] === ']' ||
      newValueSplit[i] === '}'
    ) {
      if (newValue.isEmpty()) {
        return false;
      } else {
        if (
          (newValueSplit[i] === ')' && newValue.pop() === '(') ||
          (newValueSplit[i] === ']' && newValue.pop() === '[') ||
          (newValueSplit[i] === '}' && newValue.pop() === '{')
        ) {
          return true;
        }
      }
    }
  }
  if (!newValue.top) {
    return true;
  } else {
    return false;
  }
};

module.exports = BooleanValidater;
