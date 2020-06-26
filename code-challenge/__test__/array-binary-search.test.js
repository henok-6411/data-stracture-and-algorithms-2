
'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');


let goodInputA = [4, 8, 15, 16, 23, 42];
let goodInputB = [11, 22, 33, 44, 55, 66, 77];
let goodInputC = [];
let goodInputD = [1];

describe('Good Input', () => {
  it('it sort the array and match with the given element', () => {
    expect(binarySearch(goodInputA, 15)).toBe(2);
  });

});

// Invalid Input.


describe('bad input', () => {
  it('the expected is the index value', () => {
    expect(binarySearch(goodInputA, goodInputC)).toThrow();

  });
  it('the expected is the index value', () => {
    expect(binarySearch(goodInputA, goodInputD)).toThrow();

  });

});






