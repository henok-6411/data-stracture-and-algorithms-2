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
    // console.log(newNode);
    return newNode;
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
        // console.log('currrrrr', newNode);
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
  kthFromEnd(k) {
    let current = this.head;

    if (k < 1) return false;
    let array = [];

    while (current) {
      array.push(current.val);
      current = current.next;
    }
    if (k > array.length) return false;

    return array[array.length - 1 - k];
  }

  toString() {
    let current = this.head;
    // console.log(current);
    let str = '';
    while (current) {
      str += '{' + current.val + '}' + '->';
      current = current.next;
    }
    str += 'NULL';
    console.log(str);
    return str;
  }
}
// let node1 = new Node();
// let node2 = new Node(9);

let myNode = new LinkedList();

myNode.append(2);
myNode.append(8);
myNode.append(3);

myNode.kthFromEnd(1);
// myNode.insertBefore(5, 70);
// myNode.insertAfter(5, 70);

myNode.toString();
// console.log(myNode.includes(5));

module.exports = LinkedList;
