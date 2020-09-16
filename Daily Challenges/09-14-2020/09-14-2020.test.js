const climbStairs = require('./09-14-2020');

describe('climbStairs', () => {
  it('calculates for 2', () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it('calculates for 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });
});