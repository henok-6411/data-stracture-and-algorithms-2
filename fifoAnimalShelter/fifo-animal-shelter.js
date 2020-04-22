'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class AnimalShelte {
  constructor(val) {
    this.val = val;
  }
  enqueue(val) {
    let newAnimal = new Node(val);
    if (this.isEmpty()) {
      return newAnimal;
    }
    this.rear.next = newAnimal;
    this.rear = newAnimal;
  }
  dequeue(pref) {
    let pref = pref.dog;
    let pref = pref.cat;
    let dequFront = this.front;
    this.front = this.front.next;
    dequFront.next = null;
    return dequFront;
  }
  peek() {}
  isEmpty() {}
}

module.exports = AnimalShelte;
