'use strict';

const sortRecursion = require('../../insertSort/sortRecursion.js');

describe('Happy path of sorted array' , () => {
  it('It successfully sort array' , () =>{
    let array = [8,9,1,2,5];
    expect(sortRecursion(array)).toEqual([1,2,5,8,9]);
  });
});

describe('Edge cases' , () =>{
  it('It successfully accept negative number' , () =>{
    let array = [8,9,1,-3,-9];
    expect(sortRecursion(array)).toEqual([-9,-3,1,8,9]);
  });
});