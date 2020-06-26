'use strict';

const LinkedList = require('../linkedList/linked-list.js');

<<<<<<< HEAD
=======

>>>>>>> c6d9ee93e0a2366579983db5068c6fd69d8b451a
describe('All test', () => {
  it('started my list', () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

<<<<<<< HEAD
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

    let newstr = '{C}->{B}->{A}->NULL';
    expect(newLinkedLi.toString()).toBe(newstr);
  });

  it('inserting data at the end of the list', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.append('A');
    newLinkedLi.append('B');
    newLinkedLi.append('C');
    newLinkedLi.append('F');

    expect(newLinkedLi.toString()).toBe('{A}->{B}->{C}->{F}->NULL');
  });
  it('Adds a given node to the biggining of to the same endex ', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.append('A');
    newLinkedLi.append('B');
    newLinkedLi.append('C');
    newLinkedLi.insertAfter('C', 'K');
    let newStr = '{A}->{B}->{C}->{K}->NULL';

    expect(newLinkedLi.toString()).toBe(newStr);
  });

  it('Inser a value imidiatliy before the given value', () => {
    let newLinkedLi = new LinkedList();
    newLinkedLi.append('A');
    newLinkedLi.append('B');
    newLinkedLi.append('C');
    newLinkedLi.insertBefore('C', 'F');
    let newstr = '{A}->{B}->{F}->{C}->NULL';
    expect(newLinkedLi.toString()).toBe(newstr);
  });
  /*


Where the linked list is of a size 1

  */

  it(' where k is indicating the right value of node.', () => {
    let newlinked = new LinkedList();
    newlinked.append(1);
    newlinked.append(2);
    newlinked.append(3);
    newlinked.append(4);
    newlinked.kthFromEnd(2);
    expect(newlinked.toString()).toBe(2);
  });
});

describe('Not happy path or wrong input', () => {
  it('Where k is greater than the length of the linked list', () => {
    let newlinked = new LinkedList();
    newlinked.insert(1);
    newlinked.insert(2);
    newlinked.kthFromEnd(3);
    expect(newlinked.toString()).toBeFalsy;
  });
  it('Where k and the length of the list are the same', () => {
    let newlinked = new LinkedList();
    newlinked.insert(1);
    newlinked.insert(2);
    newlinked.kthFromEnd(1);
    expect(newlinked.toString()).toBeFalsy;
  });
  it('Where k is not a positive integer', () => {
    let newlinked = new LinkedList();
    newlinked.insert(1);
    newlinked.insert(2);
    newlinked.kthFromEnd(-1);
    expect(newlinked.toString()).toBeFalsy;
  });
  it('Where the linked list is of a size 1', () => {
    let newlinked = new LinkedList();
    newlinked.insert(1);
    newlinked.insert(2);
    newlinked.kthFromEnd(4);
    expect(newlinked.toString()).toBeFalsy;
  });
});
=======
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
>>>>>>> c6d9ee93e0a2366579983db5068c6fd69d8b451a
