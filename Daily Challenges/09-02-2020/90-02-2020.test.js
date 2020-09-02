const maxProfit = require('./09-02-2020');

describe('maxProfit', () => {
   it('returns the maximum profit for [7,1,5,3,6,4]', () => {
     expect(maxProfit([7,1,5,3,6,4])).toBe(7);
  });

  it('returns the maximum profit for [1,2,3,4,5]', () => {
     expect(maxProfit([1,2,3,4,5])).toBe(4);
  });

  it('returns the maximum profit for [7,6,4,3,1]', () => {
     expect(maxProfit([7,6,4,3,1])).toBe(0);
  });
});