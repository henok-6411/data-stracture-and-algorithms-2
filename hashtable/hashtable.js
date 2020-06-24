const hash = (key , size) => {
  let hashedKey = 0;
  
  for(let i = 0; i < key.length; i++){
    hashedKey = key.charCodeAat(i);
  }
  return hashedKey % size;
  }
  
  
  
  class HashTable{
    constructor(){
  this.size = 10;
  this.buckets = Array(this.size);
    }
    
  add(){}
  get(){}
  contains(){}
  hash(){}
  }
  