const destCity = require('./08-18-2020');

describe.skip('destCity', () => {
  it('should calculate the correct destination location from [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]', () => {
    expect(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])).toEqual("Sao Paulo");
  });

  it('should calculate the correct destination location from [["B","C"],["D","B"],["C","A"]]', () => {
    expect(destCity([["B","C"],["D","B"],["C","A"]])).toEqual("A");
  });

  it('should calculate the correct destination location from [["A","Z"]]', () => {
    expect(d
    estCity([["A","Z"]])).toEqual("Z");
  });
});