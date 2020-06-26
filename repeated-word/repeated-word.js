const repeatedWord = (str) => {
  let newStr = str.toLowerCase().split(' ');
  let hashTable = {};
  for(let i = 0; i < newStr.length; i++){
    if(hashTable[newStr[i]]){
      hashTable[newStr[i]]++;
    }else{
      hashTable[newStr[i]] = 1;
    }
  }

let hashValue = Object.values(hashTable);
let key = Object.keys(hashTable);
let notFound = 'There are no duplicated words';


for(let j = 0; j < key.length; j++){
  if(hashValue[j] > 1){
    return key[j];
  } 
  
}
return notFound;

}

module.exports = repeatedWord;