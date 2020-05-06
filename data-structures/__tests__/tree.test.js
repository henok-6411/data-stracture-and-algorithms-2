'use strict';

/* 
You can successfully instantiate an empty tree
You can successfully instantiate a tree and add a single root node

You can successfully add a left and right child to a single root node
You can successfully do a preOrder traversal
You can successfully do an inOrder traversal
You can successfully do a postOrder traversal
You can successfully add a value to a binary search tree
You can search a binary search tree for a value and get the correct true/false result
*/

const tree = require('../tree/tree.js');
const Node = tree.Node;
const BT = tree.BinaryTree;
const BST = tree.BinarySearchTree;

describe('A happy path of tree', () => {
  it('You can successfully instantiate an empty tree', () => {
    let tree = new BT();
    expect(tree).toBeDefined();
    expect(tree.root).toBe(null);
  });
  it('You can successfully instantiate a tree and add a single root node', () => {
    let tree = new BT();
    let newNode = new Node(8);
    tree.root = newNode;
    console.log('tree.root', tree.root.val);

    expect(tree).toBeDefined();
    expect(tree.root.val).toBe(8);
  });
  it('You can successfully add a left and right child to a single root node', () => {
    let tree = new BT();
    let newNode = new Node(8);
    tree.root = newNode;
    tree.root.left = new Node(7);
    tree.root.right = new Node(10);

    expect(tree).toBeDefined();
    expect(tree.root.left.val).toBe(7);
    expect(tree.root.right.val).toBe(10);
  });
  it('You can successfully do a preOrder traversal', () => {
    let tree = new BT();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(17);
    tree.root.right = new Node(25);
    tree.root.right.left = new Node(21);
    tree.root.right.right = new Node(30);

    /* 
              20
          15      25 
       7     17  21   30                              
                            
              
     */

    expect(tree.preOrder()).toEqual([20, 15, 7, 17, 25, 21, 30]);
  });
  it('You can successfully do an inOrder traversal', () => {
    let tree = new BT();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right = new Node(25);
    tree.root.right.left = new Node(21);
    tree.root.right.right = new Node(30);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(17);

    expect(tree.inOrder()).toEqual([7, 15, 17, 20, 21, 25, 30]);
  });
  it('You can successfully do a postOrder traversal', () => {
    let tree = new BT();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right = new Node(25);
    tree.root.right.left = new Node(21);
    tree.root.right.right = new Node(30);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(17);

    expect(tree.pastOrder()).toEqual([7, 17, 15, 21, 30, 25, 20]);
  });
  it('You can successfully add a value to a binary search tree', () => {
    let tree = new BST();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right.left = new Node(21);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(17);

    tree.add(30);
    tree.add(25);

    expect(tree.preOrder()).toEqual([20, 7, 15, 17, 21, 30, 25]);
  });
  xit('You can search a binary search tree for a value and get the correct true/false result', () => {
    let tree = new BST();
    let newNode = new Node(20);
    tree.root = newNode;
    tree.root.left = new Node(15);
    tree.root.right.left = new Node(21);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(17);

    expect(tree.contains(4)).toBe(false);
    expect(tree.contains(30)).toBe(true);
  });
});
