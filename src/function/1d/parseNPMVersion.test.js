const { parseNPMVersion } = require("./parseNPMVersion.js");

describe("parseNPMVersion", () => {
  test("usual case", () => {
    expect(parseNPMVersion("react@16.0.0")).toEqual({
      name: "react",
      version: "16.0.0"
    });
  });

  test("long case", () => {
    expect(
      parseNPMVersion("@webscopeio/react-textarea-autocomplete@4.6.1")
    ).toEqual({
      name: "@webscopeio/react-textarea-autocomplete",
      version: "4.6.1"
    });
  });

  test("empty array", () => {
    expect(parseNPMVersion("")).toBeNull();
  });
});
