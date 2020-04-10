'use strict';

class LindkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.prev = null;
  }

  mergeList(list1, list2) {
    let before = this.head;
    let current = this.head;
    let after;
    if (before === null) {
      after === null;
      list1.next = list2.next;
    } else {
      after = before.next;
    }

    while (current !== null) {
      before.next = current;
      before = current;
      current = after;
      after = before.next;
    }
    list2.next = null;
  }
  toString() {
    let current = this.head;
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

let newNode = new LindkedList();
newNode.mergeList((5, 6, 6, 4, 3), (2, 2, 3, 5, 4));

newNode.toString();
