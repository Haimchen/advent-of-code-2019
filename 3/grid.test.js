const { getClosestDistance, getClosestIntersection, getIntersections, getPointsByInstruction, getPoints, parseInstruction } = require('./grid');

test('parse the instruction into steps and direction', () => {
  expect(parseInstruction("L1")).toEqual({ direction: "L", steps: 1 });
  expect(parseInstruction("R1")).toEqual({ direction: "R", steps: 1 });
  expect(parseInstruction("L14")).toEqual({ direction: "L", steps: 14 });
});

test('parse one instruction into a series of points', () => {
  expect(getPointsByInstruction([0,0], "L", 1)).toEqual([[-1,0]]);
  expect(getPointsByInstruction([0,0], "R", 1)).toEqual([[1,0]]);
  expect(getPointsByInstruction([0,0], "U", 1)).toEqual([[0,1]]);
  expect(getPointsByInstruction([0,0], "D", 1)).toEqual([[0,-1]]);
  expect(getPointsByInstruction([3,0], "L", 2)).toEqual([[2,0],[1,0]]);
});

test('get all points from a series of instructions', () => {
  const input = "R2,U1"
  const expectedPoints = [
    [0,0],
    [1,0],
    [2,0],
    [2,1],
  ]
  const points = getPoints(input);
  expect(points).toEqual(expectedPoints);
});

test('get all intersections from two identical series of instructions', () => {
  const input1 = "R2,U1"
  const input2 = "R2,U1"
  const expectedPoints = [
    [0,0],
    [1,0],
    [2,0],
    [2,1],
  ]
  const points = getIntersections(input1, input2);
  expect(points).toEqual(expectedPoints);
});

test('get all intersections from two series of instructions', () => {
  const input1 = "R2,U1"
  const input2 = "U1,R2"
  const expectedPoints = [
    [0,0],
    [2,1],
  ]
  const points = getIntersections(input1, input2);
  expect(points).toEqual(expectedPoints);
});
test('get the min distance from a list of intersections', () => {
  const intersections = [[0,0], [3,4], [5,6]]
  const distance = getClosestIntersection(intersections);
  expect(distance).toEqual(7);
});
test('get the min distance from two series of instructions', () => {
  const input1 = "R2,U1"
  const input2 = "U1,R2"
  const distance = getClosestDistance(input1, input2);
  expect(distance).toEqual(3);
});
