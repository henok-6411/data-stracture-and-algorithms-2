'use strict';
let size = parseInt(process.argv.slice(2));
let array = [];
for(let i = 0; i < size; i++){
array.push(Math.floor(Math.random() * Math.floor(100)));
}

const  selectionSort = (arr) =>{
  let min;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
     
      if(arr[j] > arr[i]){
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }

  }

 return arr;
}
selectionSort(array);
console.log(array);

module.exports = selectionSort;