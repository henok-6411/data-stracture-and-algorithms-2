'use strict';
class Node {
  constructor() {
    this.val = null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
  }

  preOrder(root) {
    let visitedArray = [];
    if (root === null) {
      visitedArray.push(root.val);
      return visitedArray;
    }
    if (root.left) {
      this.preOrder(root.left);
    }
    if (root.right) {
      this.preOrder(root.right);
    }
    return visitedArray;
  }
  inOrder(root) {
    let visitedArray = [];

    if (root.left) {
      this.inOrder(root.left);
    }
    visitedArray.push(root.val);

    if (root.right) {
      this.inOrder(root.right);
    }
    return visitedArray;
  }
  pastOrder(root) {
    let visitedArray = [];

    if (root.left) {
      this.pastOrder(root.left);
    }
    if (root.right) {
      this.pastOrder(root.right);
    }
    return visitedArray.push(root.val);
  }
}

class BinarySearchTree extends BinaryTree {
  add(val) {
    let newTree = new Node(val);
    if (!this.root) {
      this.root = newTree;
      console.log('newtree at the beggining', newTree);
    } else {
      this.addNode(newTree);
    }
  }
  addNode(newTree, val) {
    console.log('newtree value', newTree);
    if (newTree.val < val) {
      if (this.left === null) {
        this.left = val;
      } else {
        this.left.addNode(val);
      }
    }
    if (newTree.val > val) {
      if (this.right === null) {
        this.right = val;
      } else {
        this.right.addNode(val);
      }
    }
  }

  // contains(val) {
  //   if (this.val === val) {
  //     return true;
  //   }

  //   let newTree = new BinaryTree(val);
  //   let rootArray = [];
  //   if (!this.root) {
  //     this.root = newTree;
  //     return rootArray.push(newTree.val);
  //   }
  //   let current = newTree.val;
  //   while (current.next) {
  //     checker.push(current);
  //     if (checker.includes(current)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}

let tree = new BinarySearchTree();
console.log('this is preOrder', tree);

tree.add(50);
tree.add(14);
tree.add(57);
tree.add(9);
tree.add(19);
tree.add(31);
tree.add(62);
tree.add(3);
tree.add(11);
tree.add(72);

// console.log('root is', tree);

module.exports = BinarySearchTree;
