const { singleNumber, maxProfit } = require('./09-01-2020.js');

describe('singleNumber', () => {
  it('returns the single number from [2,2,1]', () => {
    expect(singleNumber([2,2,1])).toBe(1);
  });

  it('returns the single number from [4,1,2,1,2]', () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4);
  });

  it('returns the single number from [11,1,2,34,11,2,34,80,1,99,4,80,8,4,17,17,8]', () => {
    expect(singleNumber([11,1,2,34,11,2,34,80,1,99,4,8,4,17,17,8])).toBe(99);
  });

});

describe('maxProfit', () => {
   it('returns the maximum profit for [7,1,5,3,6,4]', () => {
     expect(maxProfit([7,1,5,3,6,4])).toBe(7);
  });

  it('returns the maximum profit for [1,2,3,4,5]', () => {
     expect(maxProfit([1,2,3,4,5])).toBe(4);
  });

   it('returns the maximum profit for [7,6,4,3,1]', () => {
     expect(maxProfit([7,6,4,3,1])).toBe(0);
  })
  
});