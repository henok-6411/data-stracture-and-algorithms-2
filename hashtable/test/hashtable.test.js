

/*


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
  map.add('serena' , 'moon');
  map.add('lita' , 'jupiter');
  map.add('mina' , 'venus');

  expect(map.get('lita')).toBe('jupiter');

  })
  it('it successfully return null' , ()=> {
    map.add('people' , 'some two');
    map.add('serena' , 'moon');
    map.add('lita' , 'jupiter');
    map.add('mina' , 'venus');

    expect(map.get('Filimon')).toBe(null);
  })
})