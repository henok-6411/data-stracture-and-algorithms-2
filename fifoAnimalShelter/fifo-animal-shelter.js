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
  }
  // d <- d <- c <- d
  dequeue(cat) {
    let dequcat = this.front;
    if (this.front === cat) {
      this.front = this.front.next;
      dequcat.next = null;
      return dequcat;
    } else {
      while (this.front === cat) {
        let current = this.front;
        let pre = null;
        current = current.next;
        pre.next = pre;
        pre.next = current.next;
        current.next = null;
        return current;
      }
    }
  }
  // c <- d <- c <- c
  dequeue(dog) {
    let dequDog = this.front;
    if (this.front === dog) {
      this.front = this.front.next;
      dequDog.next = null;
      return dequDog;
    } else {
      while (this.front === cat) {
        let current = this.front;
        let pre = null;
        current = current.next;
        pre.next = current;
        current.next = pre;
        current.next = current;
        pre.next = current.next;
        current.next = null;
        return current;
      }
    }
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
