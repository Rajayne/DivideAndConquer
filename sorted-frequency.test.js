const {
  sortedFrequency,
  sortedFrequencyConstraint,
} = require("./sorted-frequency");

describe("#sortedFrequency", function () {
  it("returns the frequency", function () {
    expect(sortedFrequencyConstraint([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);
    expect(sortedFrequencyConstraint([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1);
    expect(sortedFrequencyConstraint([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2);
    expect(sortedFrequencyConstraint([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1);
  });
});
