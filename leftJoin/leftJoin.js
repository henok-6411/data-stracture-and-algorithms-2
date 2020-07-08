'use strict';


const hash = (key , size) =>{
  let hashTable = 0;
  for(let i = 0; i < key.length; i++){
    hashTable = key.charCodeAt(i);
  
  }
      return hashTable % size;
  }

  let hashTableOne = new Array(20);
  let hashTableTwo = new Array(20);

  if(hashTableOne('foud' , 15)){
    hashTableOne[hash('foud' , 15)] = {synArray[hash('fond', 15)], next: ['fond', 'enamored']}
  }

  const add = (key , val) =>{
   let size = 20;
   let bucket = Array(size);
  for(let i = 0; i < bucket.length; i++){
    bucket[i] = new Map();
  } 
  let index = hash(key , size);
  bucket[index].set(key , val);

  }
  console.log('is it adding to add',add("foud","averse"))
  const add2 = (key , val) =>{
    let size = 20;
    let bucket = Array(size);
  
    for(let i = 0; i < bucket.length; i++){
   bucket[i] = new Map();  
    }
    let index = hash(key , size);
    bucket[index].set(key , val);

  }
  
  console.log(add2("foud","averse"))
  console.log(add2("wrath","delight"))
  console.log(add2("diligent","idle"))
  console.log(add2("guide","follow"))
  console.log(add2("flow","jam"))
  
  
  function leftJoin (hashTableOne , hashTableTwo){


  }
module.exports = {add , add2, leftJoin};