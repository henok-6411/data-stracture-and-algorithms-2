'use strict';

const LindkedList = require('../llMerge/ll-merge.js');

describe('A happy path for zip linked list', () => {
  it('It will zip two linked list into one.', () => {
    let newNode = new LindkedList();
    newNode.mergeList((1, 2, 3, 4, 5), (6, 7, 8, 9, 1));
    expect(newNode.toString()).toBe(1, 6, 2, 7, 3, 8, 4, 9, 5, 1);
  });
});
