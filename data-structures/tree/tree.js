'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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
