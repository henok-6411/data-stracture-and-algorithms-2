'use strict';
const { Stacks } = require('../stacks-and-queues.js');
/*
Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Calling pop or peek on empty stack raises exception

*/

describe('happy path of stack', () => {
  it('can successfully push', () => {
    let newStack = new Stacks();
    newStack.push('henok');

    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('henok');
  });
  it('can successfully push multiple value', () => {
    let newStack = new Stacks();
    newStack.push('henok');
    newStack.push('filimon');
    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('filimon');
  });

  it('can pop multiple ', () => {
    let newStack = new Stacks();
    newStack.push('henok');
    newStack.push('filimon');
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.peek()).toBe(null);
  });
  it('can successfully pop off the stack ', () => {
    let newStack = new Stacks();
    newStack.push('henok');
    newStack.push('filimon');
    newStack.push('gebrem');
    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('gebrem');

    expect(newStack.pop().value).toBe('gebrem');
  });
  it('Can successfully instantiate an empty stack', () => {
    let newStack = new Stacks();
    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top()).toBe(null);
  });
  it('calling pop or peek on empty stack raises exceptions', () => {
    let newStack = new Stacks();
    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top()).toBe(null);

    expect(() => {
      newStack.pop();
    }).toThrow();
    expect(() => {
      newStack.peek();
    }).toThrow();
  });
});
