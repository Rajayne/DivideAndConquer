const { findFloor, findFloorConstraint } = require("./find-floor");

describe("#findFloor", function () {
  it("returns the floor or -1", function () {
    expect(findFloorConstraint([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2); // 2
    expect(findFloorConstraint([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19); // 19
    expect(findFloorConstraint([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1); // -1
  });
});
