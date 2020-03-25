'use strict';

let array = [1, 2, 3, 4, 5];
let num = 4;

function binarySearch(arr, ele) {
  let min = 0;
  let max = arr.length - 1;
  let mid = 0;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === ele) {
      return mid;
    } else if (arr[mid] < ele) {
      return mid + 1;
    } else if (arr[mid] > ele) {
      return mid - 1;
    } else {
      return -1;
    }
  }
}
binarySearch(array, num);



module.exports = binarySearch;

