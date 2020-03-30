'use strict';

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}



class LinkedList {
  constructor(value) {
    this.head = value;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  includes(val) {
    if (this.head === val) {
      false;
    } else true;
  }
  toString() {
    while (this.head) {
      console.log('{' + this.head + '}' + '->' + '{' + this.head + '}' + '->' + '{' + this.head + '}' + '->' + 'NULL');
      this.head = this.head.next;
    }
  }
}

let myNode = new LinkedList(3);

myNode.insert('A');
myNode.insert('B');
myNode.insert('C');
myNode.toString();
