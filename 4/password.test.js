const { check, check2, countValidNumbers, numToArray } = require("./password");

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
  expect(check(123455)).toEqual(true);
});

test("check returns false for 223450", () => {
  expect(check(223450)).toEqual(false);
});

test("check2 returns true for 123455", () => {
  expect(check2(123455)).toEqual(true);
});

test("check2 returns true for 111455", () => {
  expect(check2(111455)).toEqual(true);
});

test("check2 returns false for 123444", () => {
  expect(check2(123444)).toEqual(false);
});

test("check2 returns false for 444444", () => {
  expect(check2(444444)).toEqual(false);
});

test("check2 returns true for 223344", () => {
  expect(check2(223344)).toEqual(true);
});

test("check2 returns false for 222345", () => {
  expect(check2(222345)).toEqual(false);
});

test("check2 returns false for 123444", () => {
  expect(check2(123444)).toEqual(false);
});

test("check2 returns true for 224444", () => {
  expect(check2(224444)).toEqual(true);
});

test("range of one valid number is counted correctly with check", () => {
  expect(countValidNumbers(111111, 111111, check)).toEqual(1);
});

test("range of two valid number is counted correctly with check", () => {
  expect(countValidNumbers(11, 22, check)).toEqual(2);
});
