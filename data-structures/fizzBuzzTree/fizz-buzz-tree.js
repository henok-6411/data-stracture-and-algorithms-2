'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }
  preOrder(root = this.root) {
    if (!this.root) {
      return;
    }
    let allRoot = [];
    let leftRoot = [];
    let rightRoot = [];
    allRoot.push(root.val);
    if (root.left) {
      leftRoot = this.preOrder(root.left);
    }
    if (root.right) {
      rightRoot = this.preOrder(root.right);
    }
    allRoot = [...allRoot, ...leftRoot, ...rightRoot];

    return allRoot;
  }
  inOrder(root = this.root) {
    if (!this.root) {
      return;
    }
    let allRoot = [];
    let leftRoot = [];
    let rightRoot = [];
    if (root.left) {
      leftRoot = this.preOrder(root.left);
    }
    allRoot.push(root.val);
    if (root.right) {
      rightRoot = this.preOrder(root.right);
    }
    allRoot = [...leftRoot, ...allRoot, ...rightRoot];
    return allRoot;
  }
  pastOrder(root = this.root) {
    if (!this.root) {
      return;
    }
    let allRoot = [];
    let leftRoot = [];
    let rightRoot = [];
    if (root.left) {
      leftRoot = this.preOrder(root.left);
    }
    if (root.right) {
      rightRoot = this.preOrder(root.right);
    }
    allRoot.push(root.val);
    allRoot = [...leftRoot, ...rightRoot, ...allRoot];

    return allRoot;
  }
}
class added extends BinaryTree {
  constructor() {
    super();
  }
  add(val) {
    let currentRoot = this.root;
    if (!currentRoot) {
      this.root = new Node(val);
      return;
    }
    while (currentRoot) {
      if (currentRoot.val > val) {
        if (!currentRoot.left) {
          currentRoot.left = new Node(val);
          return;
        } else {
          currentRoot = currentRoot.left;
        }
      } else if (currentRoot.val < val) {
        if (!currentRoot.right) {
          currentRoot.right = new Node(val);
          return;
        } else {
          currentRoot = currentRoot.right;
        }
      }
    }
  }
}

const FizzBuzzTree = (root) => {
  // let tree = new BinaryTree(val);

  if (!root) {
    return;
  }
  let allRoot = '';

  if (root.val % 3 === 0) {
    allRoot += 'fizz';
  }
  if (root.val % 5 === 0) {
    allRoot += 'Buzz';
  }
  if (root.val % 15 === 0) {
    allRoot += 'FizzBuzz';
  }
  let newNode = new Node(allRoot ? allRoot : `${root.val}`);

  if (root.left) {
    newNode.left = FizzBuzzTree(root.left);
  }
  if (root.right) {
    newNode.right = FizzBuzzTree(root.right);
  }

  // console.log('the first line', allRoot);

  // console.log('the first line', newNode);
  return allRoot;
};

module.exports = { Node, BinaryTree, added, FizzBuzzTree };
