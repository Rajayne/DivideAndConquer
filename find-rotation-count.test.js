const {
  findRotationCount,
  findRotationCountConstraint,
} = require("./find-rotation-count");

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCountConstraint([15, 18, 2, 3, 6, 12])).toBe(2);
    expect(findRotationCountConstraint([7, 9, 11, 12, 5])).toBe(4);
    expect(findRotationCountConstraint([7, 9, 11, 12, 15])).toBe(0);
  });
});
