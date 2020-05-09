'use strict';
const fizzbuzz = require('../fizzBuzzTree/fizz-buzz-tree.js');
let Node = fizzbuzz.Node;
let BT = fizzbuzz.BinaryTree;
let BST = fizzbuzz.added;
let fizz = fizzbuzz.FizzBuzzTree;

describe('Successfully add a value in to binaryTree !', () => {
  it('add a value to binaryTree', () => {
    let tree = new BST();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right = new Node(25);

    tree.add(10);
    tree.add(17);
    tree.add(23);
    tree.add(40);

    expect(tree.preOrder()).toEqual([20, 15, 10, 17, 25, 23, 40]);
  });
  it('It successfully check the value and change names', () => {
    let tree = new BST();

    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right = new Node(25);

    tree.add(10);
    tree.add(17);
    tree.add(23);
    tree.add(40);

    // let preOrderTree = [20, 15, 10, 17, 25, 23, 40];
    console.log('eyob ', tree.root);
    expect(fizz(tree.root)).toBe([
      {
        left: {
          left: { left: null, right: null, val: 'Buzz' },
          right: { left: null, right: null, val: 17 },
          val: 'fizz',
        },
        right: {
          left: { left: null, right: null, val: 23 },
          right: { left: null, right: null, val: 'Buzz' },
          val: 'Buzz',
        },
        val: 'Buzz',
      },
    ]);
  });
});
