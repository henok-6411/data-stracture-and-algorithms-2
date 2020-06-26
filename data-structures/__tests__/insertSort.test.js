'use strict';
const selectionSort = require('../../insertSort/insertSort.js');

describe('Happy path of sorted array' , () => {
  it('It successfully sort array' , () =>{
    let array = [8,9,1,2,5];
    expect(selectionSort(array)).toEqual([1,2,5,8,9]);
  });
});

describe('Edge cases' , () =>{
  it('It successfully accept negative number' , () =>{
    let array = [8,9,1,-3,-9];
    expect(selectionSort(array)).toEqual([-9,-3,1,8,9]);
  });
});
