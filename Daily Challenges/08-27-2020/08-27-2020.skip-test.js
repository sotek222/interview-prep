const rotate = require('./08-27-2020');

describe('rotate', () => {
  it('should rotate [1,2,3,4,5,6,7] by 3 steps', () => {
    const array = [1,2,3,4,5,6,7];
    rotate(array, 3);
    // [5,6,7,1,2,3,4]
    expect(array[0]).toBe(5);
    expect(array[1]).toBe(6);
    expect(array[2]).toBe(7);
    expect(array[3]).toBe(1);
  });

  it('should rotate [-1,-100,3,99] by 2 steps', () => {
    const array = [-1, -100, 3, 99];
    rotate(array, 2);
    // [3,99,-1,-100]
    expect(array[0]).toBe(3);
    expect(array[1]).toBe(99);
    expect(array[3]).toBe(-100);
  })
});