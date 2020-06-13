'use strict';
/**
 * ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length       
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)
ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1     
        k <-- k + 1
    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
 * 
 */
/*
* ALGORITHM Mergesort(arr)
DECLARE n <-- arr.length       
if n > 1
  DECLARE mid <-- n/2
  DECLARE left <-- arr[0...mid]
  DECLARE right <-- arr[mid...n]
  // sort the left side
  Mergesort(left)
  // sort the right side
  Mergesort(right)
  // merge the sorted left and right sides together
  Merge(left, right, arr)

*/
let size = parseInt(process.argv.slice(2));
let array = [];
for(let i = 0; i < size; i++){
array.push(Math.floor(Math.random() * Math.floor(100)));
}

const Mergesort = (arr) =>{
if(arr.length < 0){
  return arr;
}
let mid = Math.floor(arr.length / 2);
let left = arr.slice(0 , mid);
let right = arr.slice(mid , arr.length);

// To combine the left and right array by using recursion 
return merge(
  Mergesort(left), Mergesort(right)
  ); 
}

const merge = (left , right) =>{
   
}














console.log('inside recursion',merge)
merge(array);
console.log(array);
  