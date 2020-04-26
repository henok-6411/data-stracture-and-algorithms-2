'use strict';
const Animals = require('./animal.js');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class AnimalShelte {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(val) {
    let newAnimal = new Node(val);
    if (this.isEmpty()) {
      this.rear = newAnimal;
      this.front = newAnimal;
      return newAnimal;
    }
    this.rear.next = newAnimal;
    this.rear = newAnimal;
  }
  // d <- d <- c <- d
  // c <- d <- c <- c
  dequeue(pref) {
    if (!pref === 'dog' || !pref === 'cat') {
      return null;
    }
    let current = this.front;
    let pre = null;

    while (current) {
      let dequeAnimal = current.val;

      if (dequeAnimal.species === pref) {
        if (!pre) {
          this.front = current.next;
          current.next = null;
          console.log(current);
          return current;
        }
        pre.next = current.next;
        if (!current.next) this.rear = pre;

        current.next = null;
        return current;
      }

      pre = current;
      current = current.next;
    }
    return null;
  }
  peek() {
    if (this.isEmpty()) {
      throw 'NOTHING TO PICK';
    } else {
      // this.front = this.front.val;
      return this.front.val;
    }
  }
  isEmpty() {
    if (!this.rear && !this.front) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = AnimalShelte;
