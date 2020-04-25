'use strict';
const AnimalShelte = require('../fifo-animal-shelter.js');

describe('The happy path of animal shelter', () => {
  it('It will successfully enqueue animal in to the shelter', () => {
    let newAnimal = new AnimalShelte();
    newAnimal.enqueue('dog1');
    newAnimal.enqueue('dog2');
    newAnimal.enqueue('cat1');
    newAnimal.enqueue('cat2');
    expect(newAnimal.isEmpty()).toBe(false);
    expect(newAnimal.peek()).toBe('dog1');
  });
  it('It can seccessfully dequeue a cat from the shelter', () => {
    let newAnimal = new AnimalShelte();
    newAnimal.enqueue('dog1');
    newAnimal.enqueue('dog2');
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog3');
    expect(newAnimal.enqueue()).toBe(false);
    expect(newAnimal.dequeue()).toBe('cat');
  });
  it('It can successfully dequeue a dog from the shelter', () => {
    let newAnimal = new AnimalShelte();
    newAnimal.enqueue('cat1');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('cat2');
    newAnimal.enqueue('cat3');
    expect(newAnimal.enqueue()).toBe(false);
    expect(newAnimal.dequeue()).toBe('dog');
  });
});
