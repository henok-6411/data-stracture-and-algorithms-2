'use strict';

const {Node , BinarySearchTree , tree_intersection} = require('../tree-intersection.js');

describe('Happy path of intersection' , () =>{
  it('It can successfully add a tree' , () =>{
    let tree = new BinarySearchTree();
    tree.root = new Node(150);
        tree.add(100);
        tree.add(250);
        tree.add(200);
        tree.add(160);
        tree.add(125);
        tree.add(175);
        tree.add(350);
        tree.add(300);
        tree.add(500);
        tree.add(75);
   
     expect(tree.preOrder()).toEqual([150,100,75,125,250,200,160,175,350,300,500]);
    })
    it('it Successfully add the second tree' , () => {
      let tree2 = new BinarySearchTree();
      tree2.root = new Node(42)
      tree2.add(100);
      tree2.add(600);
      tree2.add(15);
      tree2.add(160);
      tree2.add(125);
      tree2.add(175);
      tree2.add(200);
      tree2.add(350);
      tree2.add(4);
      tree2.add(500);
    
      expect(tree2.preOrder()).toEqual( [
        42,  15,   4, 100,
       600, 160, 125, 175,
       200, 350, 500
     ]);
    }); 
    it('It can successfully get a duplicated values from the tree' , () =>{
      let tree = new BinarySearchTree();
      tree.root = new Node(150);
          tree.add(100);
          tree.add(250);
          tree.add(200);
          tree.add(160);
          tree.add(125);
          tree.add(175);
          tree.add(350);
          tree.add(300);
          tree.add(500);
          tree.add(75);
      //  expect(tree.preOrder()).toEqual([150,100,75,125,250,200,160,175,350,300,500]);

      let tree2 = new BinarySearchTree();
      tree2.root = new Node(42)
      tree2.add(100);
      tree2.add(600);
      tree2.add(15);
      tree2.add(160);
      tree2.add(125);
      tree2.add(175);
      tree2.add(200);
      tree2.add(350);
      tree2.add(4);
      tree2.add(500);
    //   expect(tree2.preOrder()).toEqual([42,  15,   4, 100, 600, 160,125, 175, 200, 350, 500
    //  ]);
let array1= tree.preOrder();
let array2 = tree2.preOrder();

console.log('both array' ,tree_intersection(array1,array2));
expect(tree_intersection(array1,array2)).toEqual([100,160,125,175,200,350,500]);
    })
})
