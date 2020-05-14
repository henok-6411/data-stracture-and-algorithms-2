'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class Qnode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(val) {
    let current = new Qnode(val);
    if (!this.rear || !this.front) {
      this.front = current;
      this.rear = current;
      return;
    }
    this.rear.next = current;
    current = this.rear;
  }
  dequeue() {
    if (!this.front) {
      return;
    }

    let dequefront = this.front;
    this.front = this.front.next;

    dequefront.next = null;
    return dequefront.val;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(root = this.root) {
    if (!root) return;

    let visitedArray = [];
    let leftArr = [];

    let rightArr = [];

    visitedArray.push(root.val);
    if (root.left) {
      leftArr = this.preOrder(root.left);
    }
    if (root.right) {
      rightArr = this.preOrder(root.right);
    }
    visitedArray = [...visitedArray, ...leftArr, ...rightArr];

    return visitedArray;
  }
  inOrder(root = this.root) {
    let visitedArray = [];
    let leftArr = [];
    let rightArr = [];

    if (root.left) {
      leftArr = this.inOrder(root.left);
    }
    visitedArray.push(root.val);

    if (root.right) {
      rightArr = this.inOrder(root.right);
    }

    visitedArray = [...leftArr, ...visitedArray, ...rightArr];

    return visitedArray;
  }
  pastOrder(root = this.root) {
    let visitedArray = [];
    let leftArr = [];
    let rightArr = [];

    if (root.left) {
      leftArr = this.pastOrder(root.left);
    }
    if (root.right) {
      rightArr = this.pastOrder(root.right);
    }
    visitedArray.push(root.val);

    visitedArray = [...leftArr, ...rightArr, ...visitedArray];

    return visitedArray;
  }
  breadthFirst(root = this.root) {
    // if (!root.left && !root.right) {
    //   console.log('root', root.val);
    //   return root.val;
    // }

    let queueArray = [];
    let q = new Queue();
    q.enqueue(root);

    while (q.front) {
      if (q.front.val.left) {
        q.front.val.left = q.enqueue(q.front.val.left);
      }

      if (q.front.val.right) {
        q.front.val.right = q.enqueue(q.front.val.right);
      }
      let dequeValue = q.dequeue();
      queueArray.push(dequeValue.val);
      console.log('deque array', queueArray);
    }
    return queueArray;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let current = this.root;
    while (current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = new Node(val);
          return;
        } else {
          current = current.left;
        }
      } else if (current.val < val) {
        if (!current.right) {
          current.right = new Node(val);
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    // let nodeValue = new Node(val);
    while (current) {
      if (current.val < val) {
        current = current.right;
      } else if (current.val > val) {
        current = current.left;
      } else if (current.val === val) {
        return true;
      }
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
