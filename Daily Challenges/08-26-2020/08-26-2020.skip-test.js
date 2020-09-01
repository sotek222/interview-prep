const removeDuplicates = require('./08-26-2020.js');

describe('removeDuplicates', () => {
  it('should return the new length of [1,1,2]', () => {
    expect(removeDuplicates([1,1,2])).toBe(2);
  });

  it('should return the new length of [33, 34, 34, 34, 60, 60, 60, 60, 60, 100, 100, 1405, 1405, 1405, 1500, 949289]', () => {
    expect(removeDuplicates([33, 34, 34, 34, 60, 60, 60, 60, 60, 100, 100, 1405, 1405, 1405, 1500, 949289])).toBe(7);
  });

  it('should return the new length of [0,0,1,1,1,2,2,3,3,4]', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  });
});