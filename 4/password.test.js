const { check, countValidNumbers, numToArray } = require("./password");

test("digit is parsed to array containing digit", () => {
  expect(numToArray(1)).toEqual([1]);
});

test("number is parsed to array of digits", () => {
  expect(numToArray(123)).toEqual([1, 2, 3]);
});

test("check returns true for 111111", () => {
  expect(check(111111)).toEqual(true);
});

test("check returns true for 123455", () => {
  expect(check(111111)).toEqual(true);
});

test("check returns false for 223450", () => {
  expect(check(223450)).toEqual(false);
});

test("range of one valid number is counted correctly", () => {
  expect(countValidNumbers(111111, 111111)).toEqual(1);
});

test("range of two valid number is counted correctly", () => {
  expect(countValidNumbers(11, 22)).toEqual(2);
});
