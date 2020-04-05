'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    console.log(newNode);
  }
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  append(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);

  }
  insertBefore(value, newVal) {


    let current = this.head;
    let prevNode = this.null;

    if (current.val === value) {
      let newNode = new Node(newVal);
      newNode.next = current;

      current = newNode;
      return;
    }
    while (current) {
      if (current.val === value) {
        let newNode = new Node(newVal);
        prevNode.next = newNode;
        console.log('currrrrr', newNode);
        newNode.next = current;
        return;
      }
      prevNode = current;
      current = current.next;

    }
  }
  insertAfter(value, newVal) {
    let current = this.head;
    if (!current) {
      return console.log('Nothing to compare');
    }
    while (current) {
      if (current.val === value) {
        let newNode = new Node(newVal);
        let valueNum = newNode.next;
        current.next = newNode;
        newNode.next = valueNum;
        return;
      }
      current = current.next;
    }

  }
  toString() {
    let current = this.head;
    console.log(current);
    let str = '';
    while (current) {

      str += '{' + current.val + '}' + '->';
      current = current.next;
    }
    str += 'NULL';
    console.log(str);
  }
}
// let node1 = new Node();
// let node2 = new Node(9);

let myNode = new LinkedList();


myNode.insert(2);
myNode.insert(5);
myNode.insert(7);
myNode.insert(9);
myNode.append(45);
myNode.insertBefore(5, 70);
myNode.insertAfter(5, 70);




myNode.toString();
console.log(myNode.includes(5));

module.exports = { Node, LinkedList };
