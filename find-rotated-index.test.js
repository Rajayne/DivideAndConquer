const {
  findRotatedIndex,
  findRotatedIndexConstraint,
} = require("./find-rotated-index");

describe("#findRotatedIndex", function () {
  it("returns the correct index", function () {
    expect(findRotatedIndexConstraint([3, 4, 1, 2], 4)).toBe(1);
    expect(findRotatedIndexConstraint([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2);
    expect(findRotatedIndexConstraint([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);
    expect(findRotatedIndexConstraint([37, 44, 66, 102, 10, 22], 14)).toBe(-1);
    expect(findRotatedIndexConstraint([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1);
  });
});
