'use strict';
const MultiBracketValidate = require('../multi-bracket-validation.js');

describe('THE HAPPY PATH OF VALIDATE BRACKETS', () => {
  it('It successfully check the brackets and return boolean', () => {
    let newBracket = new MultiBracketValidate();
    newBracket.push('(', '[', '{', '}', ']', ')');
    expect(newBracket.BooleanValidater()).toBe(true);
  });
});
