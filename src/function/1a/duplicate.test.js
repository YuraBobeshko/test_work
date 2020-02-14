const { duplicate } = require("./duplicate.js");

describe('duplicate', () => {
  test("usual case", () => {
    expect(duplicate([1, 2])).toEqual([1, 2, 1, 2]);
  });

  test("long case", () => {
    expect(duplicate([1, 2, 3, 4])).toEqual([1, 2, 3, 4, 1, 2, 3, 4]);
  });

  test("empty array", () => {
    expect(duplicate([])).toEqual([]);
  });
})