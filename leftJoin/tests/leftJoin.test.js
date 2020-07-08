'use strict';

const {add , add2 ,leftJoin} = require('../leftJoin');


describe('Happy path of hashTable' , () =>{
  it('It can successfully store to a table' , () =>{
    console.log(add('foud','enamored'))
//     leftJoin.add = ("wrath","anger")
//     leftJoin.add = ("diligent","employed")
//     leftJoin.add = ("outify","garb")
//     leftJoin.add = ("guide","user")
// console.log('what do',leftJoin.add)
   expect(add(foud,"enamored")).toBe(true);
  })
})