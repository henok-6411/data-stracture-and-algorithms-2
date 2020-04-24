'use strict';
const AnimalShelte = require('../fifo-animal-shelter.js');

describe('The happy path of animal shelter', () => {
  it('it will successfully enqueue animal in to the shelter', () => {
    let newAnimal = new AnimalShelte();
    newAnimal.enqueue('dog1');
    newAnimal.enqueue('dog2');
    newAnimal.enqueue('cat1');
    newAnimal.enqueue('cat2');
    expect(newAnimal.isEmpty()).toBe(false);
    expect(newAnimal.peek()).toBe('dog1');
  });
});
