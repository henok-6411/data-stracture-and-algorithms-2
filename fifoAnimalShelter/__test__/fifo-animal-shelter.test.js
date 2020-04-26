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
    let endDog1 = new Animals.Dog('dog1');
    let endDog2 = new Animals.Dog('dog2');
    let endCat = new Animals.Cat('cat');
    let endDog3 = new Animals.Dog('dog3');

    newAnimal.enqueue(endDog1);
    newAnimal.enqueue(endDog2);
    newAnimal.enqueue(endCat);
    newAnimal.enqueue(endDog3);
    expect(newAnimal.isEmpty()).toBe(false);
    let dequeAnimal = newAnimal.dequeue('cat');
    console.log(dequeAnimal.val);
    expect(dequeAnimal.val.species).toBe('cat');
  });
  it('It can successfully dequeue a dog from the shelter', () => {
    let newAnimal = new AnimalShelte();
    let deqDog = new Animals.Dog('dog');
    // console.log(deqDog);
    newAnimal.enqueue('cat1');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('cat2');
    newAnimal.enqueue('cat3');
    // console.log(newAnimal);
    expect(newAnimal.isEmpty()).toBe(false);

    expect(newAnimal.dequeue('dog')).toBe('dog');
  });
});
