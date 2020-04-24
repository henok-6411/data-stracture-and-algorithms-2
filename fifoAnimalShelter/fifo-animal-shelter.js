'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.dog = null;
    this.cat = null;
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
      this.rear = newAnimal;
      this.front = newAnimal;
      return newAnimal;
    }
    this.rear.next = newAnimal;
    this.rear = newAnimal;
    console.log(newAnimal);
  }
  // dequeue(pref) {
  // let pref = pref.dog;
  // let pref = pref.cat;
  // let dequFront = this.front;
  // this.front = this.front.next;
  // dequFront.next = null;
  // return dequFront;
  // }
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
