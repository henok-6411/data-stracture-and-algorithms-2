
'use strict';
/*
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
*/


let insertShiftArray = () => {
  let value = 16;
  let arrayNum = [4, 8, 15, 23, 42];
  let val = Math.round((arrayNum.length) / 2);

  for (let i = arrayNum.length; i > val; i--) {
    arrayNum[i] = arrayNum[i - 1];
  }
  arrayNum[val] = value;
  return arrayNum;
};
insertShiftArray();





module.exports = insertShiftArray;
