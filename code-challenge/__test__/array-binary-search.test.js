
'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');






// Expected Result . 


let goodInputArray = [1, 2, 3, 4, 5];
let goodInputValue = 4;
let expectedResult = 3;

describe('code challenge 3', () => {
  it('it sort the array and match with the given element', () => {
    expect(binarySearch(goodInputArray, goodInputValue)).toBe(expectedResult);
  });
});

// Invalid Input . 

let badInputA = 4;
// let badInputB = 'string';
let badInputC = [];
let badInputD = -1;
let badInputE = null;

expect(binarySearch(goodInputArray, badInputC)).toThrow();
expect(binarySearch(badInputD, badInputE)).toThrow();
expect(binarySearch(badInputA, goodInputValue)).toThrow();

// Edge case . 

// let edgeInputA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let edgeInputB = [1];




