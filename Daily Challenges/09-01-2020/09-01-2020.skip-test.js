const singleNumber = require('./09-01-2020.js');

describe('singleNumber', () => {
  it('returns the single number from [2,2,1]', () => {
    expect(singleNumber([2,2,1])).toBe(1);
  });

  it('returns the single number from [4,1,2,1,2]', () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4);
  });

  it('returns the single number from [11,1,2,34,11,2,34,80,1,99,4,80,8,4,17,17,8]', () => {
    expect(singleNumber([11,1,2,34,11,2,34,80,1,99,4,8,4,17,17,8,80])).toBe(99);
  });

});