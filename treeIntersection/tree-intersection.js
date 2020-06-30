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
  let newArray = {};
  let array = [];
  for(let i = 0; i < arr1.length; i++){
    newArray[arr1[i]] = true;
  }
  
  for(let i = 0; i < arr2.length; i++){
     let compare = newArray[arr2[i]];
     if(compare){
     array.push(arr2[i]);
     newArray[arr2[i]] = false;
     } 
  }
  
  //  newArray = Object.keys(newArray);
  return array;
    
  }

module.exports = {Node , BinarySearchTree , tree_intersection};

