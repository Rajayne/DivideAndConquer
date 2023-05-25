const { countZeroes, countZeroesConstraint } = require("./count-zeroes");

describe("#countZeroes", function () {
  it("counts the number of zeroes", function () {
    expect(countZeroesConstraint([1, 1, 1, 1, 0, 0])).toBe(2);
    expect(countZeroesConstraint([1, 0, 0, 0, 0])).toBe(4);
    expect(countZeroesConstraint([0, 0, 0])).toBe(3);
    expect(countZeroesConstraint([1, 1, 1, 1])).toBe(0);
  });
});
