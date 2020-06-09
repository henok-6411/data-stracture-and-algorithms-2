'use strict';
const sort = require('../../insertSort/insertSort.js');

describe('Happy path of sorted array' , () => {
  it('It successfully sort array' , () =>{
    let array = [8,9,1,2,5];
    expect(sort(array)).toBe([1,2,5,8,9]);
  });
});

describe('Edge cases' , () =>{
  it('It successfully accept negative number' , () =>{
    let array = [8,9,1,-3,-9];
    expect(sort(array)).toBe([-9,-3,1,8,9]);
  });
});
