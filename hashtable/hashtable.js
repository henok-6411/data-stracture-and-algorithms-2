  

const hash = (key , size) =>{
  let hashedKey = 0;
  for(let i = 0; i < key.length; i++){
    hashedKey = key.charCodeAt
    (i);
  }
  return hashedKey % size;
}


  class HashTable{
    constructor(){
     this.size = 20;
     this.buckets = Array(this.size);
    for(let i = 0; i < this.buckets.length; i++){
      this.buckets[i] = new Map();
    }
    }
    

  add(key , val){
    let index = hash(key , this.size);
    this.buckets[index].set(key , val);
  }
  
  get(key){
    let index = hash(key , this.size);
   if(this.buckets[index]){
    return this.buckets[index].get(key)
   }else if(this.buckets[index] !== this.buckets[index].val){
     
    return null;
     }
   }

   contains(key){
     let val = this.get(key);
     if(!val) return false;
     else return true;
    }
  }
    


const newHash = new HashTable();

  newHash.add('Randi' , 'some two');
  newHash.add('people' , 'some two');
  newHash.add('Eyob' , 'some two');
  newHash.add('Thomas' , 'some two');
  newHash.add('Henok' , 'some two2');
  newHash.add('serena' , 'moon');
  newHash.add('lita' , 'jupiter');
  newHash.add('mina' , 'venus');
  
  // console.log(newHash.get('lita'));
  // console.log(newHash);
 
  // newHash.contains('henok');
  
  


  module.exports = HashTable;

 