'use strict';

const LinkedList  = require('../linkedlist.js');

describe('happy path of linkedlist' , () =>{
  it('it append value' , () =>{
    let newValue = new LinkedList()
    newValue.appendVal('A');
    newValue.appendVal('B');
    newValue.appendVal('C');
    newValue.appendVal('D');

    expect(newValue).toBe(true);
  })
})