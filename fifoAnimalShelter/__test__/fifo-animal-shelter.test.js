'use strict';
const AnimalShelte = require('../fifo-animal-shelter.js');
const Animals = require('../animal.js');

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
    let deqCat = new Animals.Cat('cat');
    newAnimal.enqueue('dog1');
    newAnimal.enqueue('dog2');
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog3');
    expect(newAnimal.isEmpty()).toBe(false);
    expect(newAnimal.dequeue(deqCat)).toBe('cat');
  });
  it('It can successfully dequeue a dog from the shelter', () => {
    let newAnimal = new AnimalShelte();
    let deqDog = new Animals.Dog('dog');
    console.log(deqDog);
    newAnimal.enqueue('cat1');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('cat2');
    newAnimal.enqueue('cat3');
    console.log(newAnimal);
    expect(newAnimal.isEmpty()).toBe(false);

    expect(newAnimal.dequeue(deqDog)).toBe('dog');
  });
});
