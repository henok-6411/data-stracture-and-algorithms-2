'use strict';

const repeatedWord = require('../repeated-word');
describe('happy path of repeated-word' , () => {
  it('It successfully check the repeated work' , () =>{
    let str = "Once upon a time, there was a brave princess who...";
      expect(repeatedWord(str)).toBe('a');
  })
  it( 'It successfully return the first duplicate word', () => {
    let str = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    expect(repeatedWord(str)).toBe('it');
  })
  it('It successfully check there are no duplicated words' , () =>{
    let str = "code fellows is the best place to learn coding";
    console.log(repeatedWord);
    expect(repeatedWord(str)).toBe('There are no duplicated words');
  })
})