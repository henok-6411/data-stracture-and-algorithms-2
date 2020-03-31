'use strict';

const LinkedList = require('../linkedList/linked-list.js');


describe('All test', () => {
  it('started my list', () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

  it('add to linked list', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.insert('A');
    let newstr = newLinkedLi.toString();
    expect(newstr).toBe('{A} -> NULL');
  });

  it('The Inserted value will be to the beggining', () => {
    let newValue = new LinkedList();
    newValue.insert('B');
    expect(newValue.head.val).toBe('B');
  });
});