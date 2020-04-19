'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    // let current = this.head;
    // let newNode = new Node(value);

    // if (!current) {
    //   current = new Node(value);
    //   // console.log(current);
    //   return;
    // }
    // while (current.next) {
    //   current = current.next;
    //   console.log(current);
    // }
    // current.next = newNode;

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

  toString() {
    let str = '';
    let current = this.head;
    while (current) {
      str += '[' + current.val + ']' + '->';
      current = current.next;
    }
    str += 'null';

    return str;
  }
}

const reverse = (head) => {
  // let prevNode = null;
  // let currentNode = head;
  // let nextNode;
  // while (currentNode) {
  //   nextNode = currentNode.next;
  //   currentNode.next = prevNode;

  //   prevNode = currentNode;
  //   currentNode = nextNode;
  // }
  // console.log(prevNode);
  // return prevNode;

  let node = head;
  let prev = 'null';
  if (!node) {
    return false;
  }
  while (node) {
    let save = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }
  return prev;
};

let newNode = new LinkedList();
newNode.append('a');
newNode.append('b');
newNode.append('c');
console.log('i am before the function', newNode.toString());

reverse(newNode.head);

console.log('After the reverse function', newNode.toString());
