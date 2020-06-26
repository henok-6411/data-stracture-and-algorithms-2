'use strict';
const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    let newPop = this.top;
    if (!this.top) {
      throw 'No value at the node';
    }
    this.top = this.top.next;
    newPop.next = null;
    return newPop;
  }
  push(val) {
    let newStack = new Node(val);
    console.log(newStack);
    if (this.isEmpty()) {
      this.top = newStack;
      return;
    }
    newStack.next = this.top;
    this.top = newStack;
  }
  peek() {
    if (this.top) {
      return this.top.val;
    } else {
      throw 'there is no node';
    }
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  enqueue(val) {
    let newQueue = new Node(val);
    if (this.isEmpty()) {
      this.front = newQueue;
      this.rear = newQueue;
      return;
    }

    this.rear.next = newQueue;
    this.rear = newQueue;
  }
  dequeue() {
    let dequeValue = this.front;
    if (this.isEmpty()) {
      throw 'THERE IS NO VALUE';
    } else {
      this.front = this.front.next;
      dequeValue.next = null;
      return dequeValue;
    }
  }
  peek() {
    if (this.isEmpty()) {
      throw 'THERE IS NO NODE VALUE';
    } else {
      return this.front.val;
    }
  }
  isEmpty() {
    if (!this.front && !this.rear) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack, Queue };
