'use strict';
const { Stack } = require('../Stacks-and-queues.js');
/*
Can successfully push onto a stack
Can successfully push multiples onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Calling pop or peek on empty stack raises exception

*/

describe('happy path of stack', () => {
  it('can successfully push', () => {
    let newStack = new Stack();
    newStack.push('henok');

    console.log(newStack.isEmpty());
    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('henok');
  });
  it('can successfully push multiple', () => {
    let newStack = new Stack();
    newStack.push('henok');
    newStack.push('filimon');
    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('filimon');
  });

  it('can pop multiple ', () => {
    let newStack = new Stack();
    newStack.push('henok');
    newStack.push('filimon');
    newStack.push('thomas');
    newStack.pop();
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);
  });
  it('can successfully pop off the stack ', () => {
    let newStack = new Stack();
    newStack.push('henok');
    newStack.push('filimon');
    newStack.push('gebrem');
    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('gebrem');
    expect(newStack.pop().val).toBe('gebrem');
  });
  it('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);
  });
  it('calling pop or peek on empty stack raises exceptions', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);

    expect(() => {
      newStack.pop();
    }).toThrow();
    expect(() => {
      newStack.peek();
    }).toThrow();
  });
});
