const { default: expect } = require("expect");
const capitalize = require("./capitalize");

test("capitalize the first character of the string", () => {
  expect(capitalize("lovi")).toBe("Lovi");
});