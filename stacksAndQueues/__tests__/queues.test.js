'use strict';
const { queues } = require('../stacks-and-queues.js');
/*

Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeue
Can successfully instantiate an empty queue

Calling dequeue or peek on empty queue raises exception
*/

describe('successful path of Queue', () => {
  it('can successfully enqueue into a queue', () => {
    let newQueue = new Queues();
    newQueue.enqueue('lwam');
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('lwam');
  });
  it('can successfully enqueue multiple values into a queue', () => {
    let newQueue = new Queues();
    newQueue.enqueue('menge');
    newQueue.enqueue('henok');
    newQueue.enqueue('kidus');
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('kidus');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let newQueue = new Queues();
    newQueue.enqueue('menge');
    newQueue.enqueue('henok');
    newQueue.enqueue('kidus');
    expect(newQueue.dequeue()).toBe('kidus');
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let newQueue = new Queues();
    newQueue.enqueue('menge');
    newQueue.enqueue('henok');
    newQueue.enqueue('kidus');
    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('kidus');
  });
  it('Can successfully empty a queue after multiple dequeue', () => {
    let newQueue = new Queues();
    newQueue.enqueue('menge');
    newQueue.enqueue('henok');
    newQueue.enqueue('kidus');
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.isEmpty()).toBe(true);
  });
  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queues();
    newQueue.enqueue('menge');
    expect(newQueue.peek()).toBe('menge');
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queues();
    expect(newQueue.isEmpty()).toBe(true);

    expect(() => {
      newQueue.dequeue();
    }).toThrow();
    expect(() => {
      newQueue.peek();
    }).toThrow();
  });
});
