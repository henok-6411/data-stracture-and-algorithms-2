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
    if (!current) {
      console.log('there is not valied value');
    } else if (current.val === value) {
      this.head = new Node(newVal, this.head);
      return;
    }

    while (current.next) {
      if (current.next.val === value) {
        let newNode = new Node(newVal, current.next);
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
  insertAfter(value, newVal) {
    let current = this.head;
    let newNode;
    if (!current) {
      return console.log('Nothing to compare');
    }
    while (current) {
      if (current.val === value) {
        if (current.next) {
          newNode = new Node(newVal, current.next);
          console.log('new noode', newNode);
          newNode = current.next;
        } else {
          newNode = new Node(newVal);
          current.next = newNode;
        }

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

// myNode.insert(9);
myNode.append(45);
myNode.insertAfter(5, 70);



myNode.toString();
console.log(myNode.includes(5));

module.exports = { Node, LinkedList };
