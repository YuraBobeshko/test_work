import unique from './unique'

describe("unique", () => {
  test("usual case", () => {
    expect(unique([1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("long case", () => {
    expect(unique([1, 2, 3, 4, 1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("empty array", () => {
    expect(unique([])).toEqual([]);
  });
});
