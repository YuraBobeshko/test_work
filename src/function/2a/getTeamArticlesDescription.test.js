const {
  getTeamArticlesDescription
} = require("./getTeamArticlesDescription.js");

describe("getTeamArticlesDescription", () => {
  const case1 = `Oliver wrote an article 'RxJS and redux-observable'.
Jan wrote articles 'RxJS and redux-observable', 'Firebase' and 1 more.
Jakub wrote articles 'MobX in practise', 'RxJS and redux-observable' and 2 more.
Peter wrote 0 articles.`;

  const case2 = `Tomas wrote articles 'RxJS and redux-observable' and 'CSS in JS'.
Drahoslav wrote an article 'RxJS and redux-observable'.
Honza wrote articles 'RxJS and redux-observable' and 'Firebase'.`;

  test("usual case", () => {
    expect(getTeamArticlesDescription(2)).toBe(case2);
  });

  test("long case", () => {
    expect(getTeamArticlesDescription(1)).toBe(case1);
  });

  test("error case", () => {
    expect(getTeamArticlesDescription(3)).toBe('wrong team')
  });
});
