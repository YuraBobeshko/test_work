import last from './last'

describe('last', () => {
  test("usual case", () => {
    expect(last([1, 2])).toBe(2);
  });

  test("long case", () => {
    expect(last([1, 2, 3, 4])).toBe(4);
  });

  test("empty array", () => {
    expect(last([])).toBeUndefined()
  });
});