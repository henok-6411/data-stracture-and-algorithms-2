'use strict';


const hash = (key , size) =>{
  let hashTable = 0;
  for(let i = 0; i < key.length; i++){
    hashTable = key.charCodeAt(i);
  
  }
      return hashTable % size;
  }
  const add = (key , val) =>{
   let size = 20;
   let bucket = Array(size);
  for(let i = 0; i < bucket.length; i++){
    bucket[i] = new Map();
  
  }
  
  let index = hash(key , size);
  bucket[index].set(key , val);
  console.log(bucket[index]);
  }
  //************************************************* */
  
  
  console.log(add("foud","enamored"))
  console.log(add("wrath","anger"))
  console.log(add("diligent","employed"))
  console.log(add("outify","garb"))
  console.log(add("guide","user"))
  
  
  
  // const hash = (key , size) =>{
  //   let hashTable = 0;
  //   for(let i = 0; i < key.length; i++){
  //     hashTable = key.charCodeAt(i);
  //   }
  //   return hashTable % size;
  // }
  console.log('***********************************************')
  const add2 = (key , val) =>{
    let size = 20;
    let bucket = Array(size);
  
    for(let i = 0; i < bucket.length; i++){
   bucket[i] = new Map();  
    }
    let index = hash(key , size);
    bucket[index].set(key , val);
  console.log(bucket[index]);
  }
  
  console.log(add2("foud","averse"))
  console.log(add2("wrath","delight"))
  console.log(add2("diligent","idle"))
  console.log(add2("guide","follow"))
  console.log(add2("flow","jam"))
  
  /**
   * 
   * 
   * 
   */
  function leftJoin (hashTableOne , hashTableTwo){

  }
module.exports = leftJoin;