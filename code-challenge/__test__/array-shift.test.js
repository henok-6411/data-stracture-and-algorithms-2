
'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');

describe('code challenge 2', () => {
  it('insert the element to the index with out using any built-in method', () => {
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
