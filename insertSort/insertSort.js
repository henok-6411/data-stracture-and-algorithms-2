'use strict';

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
module.exports = selectionSort;