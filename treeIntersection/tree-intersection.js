'use strict';

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;  
  }    
}
class BinarySearchTree{
  constructor(){
    this.root = null;
  
}
preOrder(root = this.root){
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
 add(val){
   let newNode = new Node(val);
   
   if(!this.root) {
     this.root = newNode;
     return;
    }
    let current = this.root;
   while(current){
     if(current.val > val){
           if(!current.left){
             current.left = newNode;
             return;
           }  else{
            current = current.left;
           } 
     }
     
     if(current.val < val){
       if(!current.right){
         current.right = newNode;
         return;
       }else{
         current = current.right;
       } 
     }
   } 
 }
}


const tree_intersection = (arr1 , arr2) =>{
let newArray = [];

for(let i = 0; i < arr1.length; i++){
  for(let j = 0; j < arr2.length; j++){
    if(arr1[i] === arr2[j]){
      newArray.push(arr1[i]);
    }
  }
}
return newArray;
  
}

module.exports = {Node , BinarySearchTree , tree_intersection};

