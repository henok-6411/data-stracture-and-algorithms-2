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
  let current = root;

  console.log('tree current', current);
  if (current.val % 3 === 0) {
    current.val = 'fizz';
    console.log(current.val);
  } else if (current.val % 5 === 0) {
    current.val = 'Buzz';
  }
  if (current.val % 15 === 0) {
    current.val = 'FizzBuzz';
  }
  if (current.left) {
    console.log('left', current.left);
    FizzBuzzTree(current.left);
  }
  if (current.right) {
    FizzBuzzTree(current.right);
  }

  // if (current.val > tree.val) {
  //   if (current.left.val % 3 === 0) {
  //     current.left = new Node('fizz');
  //   } else if (current.left.val % 5 === 0) {
  //     current.left = new Node('Buzz');
  //   }
  //   if (current.left.val % 15 === 0) {
  //     current.left = new Node('FizzBuzz');
  //   }
  // } else if (current.val < tree.val) {
  //   if (current.right.val % 3 === 0) {
  //     current.right = new Node('fizz');
  //   }
  //   if (current.right.val % 5 === 0) {
  //     current.right = new Node('Buzz');
  //   }
  //   if (current.right.val % 15 === 0) {
  //     current.right = new Node('FizzBuzz');
  //   }
  // }

  return root;
};

module.exports = { Node, BinaryTree, added, FizzBuzzTree };
