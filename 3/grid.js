const parseInstruction = (instruction) => {
  const direction = instruction.charAt(0);
  const steps = Number(instruction.substring(1));

  return { direction, steps }
}

// decrease x value
const moveLeft = (point, steps) => {
  const points = []
  const [startX, startY] = point;
  for(let i = 1; i <= steps; i++) {
    points.push([startX - i, startY])
  }
  return points;
}

const moveDown = (point, steps) => {
  const points = []
  const [startX, startY] = point;
  for(let i = 1; i <= steps; i++) {
    points.push([startX, startY - i])
  }
  return points;
}

const moveUp = (point, steps) => {
  const points = []
  const [startX, startY] = point;
  for(let i = 1; i <= steps; i++) {
    points.push([startX, startY + i])
  }
  return points;
}

const moveRight = (point, steps) => {
  const points = []
  const [startX, startY] = point;
  for(let i = 1; i <= steps; i++) {
    points.push([startX + i, startY])
  }
  return points;
}
const getPointsByInstruction = (currentPoint, direction, steps) => {
  switch(direction){
    case "L":
      return moveLeft(currentPoint, steps);
    case "R":
      return moveRight(currentPoint, steps);
    case "U":
      return moveUp(currentPoint, steps);
    case "D":
      return moveDown(currentPoint, steps);
    default:
      throw new Error(`invalid direction: ${direction}`)
  }
}

// Point: [x, y]
const getPoints = (directions) => {
  let points = [[0,0]];
  const instructions = directions.split(',');
  instructions.forEach(instruction => {
    const { direction, steps } = parseInstruction(instruction);
    const currentPoint = points[points.length - 1]
    const nextPoints = getPointsByInstruction(currentPoint, direction, steps);
    points = points.concat(nextPoints);
  })
  return points;
}

const getIntersections = (directions1, directions2) => {
  const path1 = getPoints(directions1)
  const path2 = getPoints(directions2)
  const intersections = path1.filter(([x, y]) => path2.findIndex(([x2, y2]) => x == x2 && y == y2) >= 0)
  return intersections;
}

const sortNumber = (a, b) => {
  return a - b;
}
const getClosestIntersection = (intersections) => {
  const distances = intersections.map(([x, y]) => Math.abs(x) + Math.abs(y));
  const minDistance = distances.sort(sortNumber)
  return minDistance[1];
}

const getClosestDistance = (directions1, directions2) => {
  const intersections = getIntersections(directions1, directions2);
  return getClosestIntersection(intersections)
}

const { directions1, directions2 }= require('./input');
console.log("start calculation of intersections")
const minDistance = getClosestDistance(directions1, directions2);
console.log("the minimal distancce is ", minDistance)

module.exports = {
  parseInstruction,
  getPointsByInstruction,
  getPoints,
  getIntersections,
  getClosestDistance,
  getClosestIntersection,
}

