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


myNode.toString();
console.log(myNode.includes(5));

module.exports = LinkedList;