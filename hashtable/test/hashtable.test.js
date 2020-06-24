

/*
Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value 
*/
const HashTable = require('../hashtable.js');
const map = new HashTable();

describe('A happy path of hash', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure' , () => {
  map.add('people' , 'some two');
  // expect(map.contains('people')).toBe(true);
  let index = map.hash('people');
  expect(map.map[index].val).toEqual('some two');

  })
})