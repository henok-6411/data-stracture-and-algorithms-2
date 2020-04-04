'use strict';

const classes = require('../linkedList/linked-list.js');
const LinkedList = classes.LinkedList;





describe('All test', () => {
  it('started my list', () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

  it('The Inserted value will be to the beggining', () => {
    let newValue = new LinkedList();
    newValue.insert('A');
    newValue.insert('B');
    newValue.insert('C');
    expect(newValue.head).toBeDefined();
    expect(newValue.head.val).toBe('C');
  });

  it('the value format', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.insert('A');
    newLinkedLi.insert('B');
    newLinkedLi.insert('C');

    let newstr = '{C} -> {B} -> {A} -> NULL';
    expect(newLinkedLi.toString()).toBe(newstr);

  });


  it('inserting data at the end of the list', () => {
    let newLinkedLi = new LinkedList();
    let one = newLinkedLi.insert('A');
    let two = newLinkedLi.insert('B');

    let three = newLinkedLi.insert('C');
    let four = newLinkedLi.append('F');

    let newValue = '{' + one + '} -> {' + two + '} -> { ' + three + '} -> { ' + four + ' } -> NULL';

    expect(newLinkedLi.append()).toBe(newValue);

  });
  it('Adds a given node to the biggining of to the same endex ', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.insert('A');
    newLinkedLi.insert('B');
    newLinkedLi.insert('C');
    newLinkedLi.insertAfter('C', 'K');
    let newStr = '{A} -> {B} -> {C} -> {K} -> NULL';

    expect(newLinkedLi.insertAfter()).toBe(newStr);

  });


  it('Inser a value imidiatliy before the given value', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.insert('A');
    newLinkedLi.insert('B');
    newLinkedLi.insert('C');
    newLinkedLi.insertBefore('C', 'F');
    let newstr = '{A} -> {B} -> {F} -> {C} -> NULL';
    expect(newLinkedLi.insertBefore()).toBe(newstr);

  });



});