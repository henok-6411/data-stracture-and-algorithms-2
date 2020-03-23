'use strict';

function binarySearch(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return [i];
    } else {
      return -1;
    }
  }
}

binarySearch();






module.exports = binarySearch;