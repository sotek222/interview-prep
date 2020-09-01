const twoSum = require('./08-13-2020');

describe.skip('twoSum', () => {
  it('should calculate the two indices of [2, 7, 11, 15] with 9 as a target', () => {
    expect(twoSum([2, 7, 11, 15], 9)[0]).toBe(0);
    expect(twoSum([2, 7, 11, 15], 9)[1]).toBe(1);
  });

   it('should calculate the two indices of [3, 6, 2, 0, 5, 8] with 14 as a target', () => {
    expect(twoSum([3, 6, 2, 0, 5, 8], 14)[0]).toBe(1);
    expect(twoSum([3, 6, 2, 0, 5, 8], 14)[1]).toBe(5);
  });
});


