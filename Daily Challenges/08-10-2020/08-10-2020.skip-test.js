const runningSum = require('./08-10-2020.js');

describe.skip('runningSum', () => {
  it('should calculate the running sum of [1,2,3,4]', () => {
    expect(runningSum([1,2,3,4])[3]).toBe(10);
  });

  it('should calculate the running sum of [1,1,1,1,1]', () => {
    expect(runningSum([1,1,1,1,1])[4]).toBe(5);
  });

  it('should calculate the running sum of [3,1,2,10,1]', () => {
    expect(runningSum([3,1,2,10,1])[4]).toBe(17);
  })
});
