const initalProgram = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  6,
  1,
  19,
  1,
  19,
  9,
  23,
  1,
  23,
  9,
  27,
  1,
  10,
  27,
  31,
  1,
  13,
  31,
  35,
  1,
  35,
  10,
  39,
  2,
  39,
  9,
  43,
  1,
  43,
  13,
  47,
  1,
  5,
  47,
  51,
  1,
  6,
  51,
  55,
  1,
  13,
  55,
  59,
  1,
  59,
  6,
  63,
  1,
  63,
  10,
  67,
  2,
  67,
  6,
  71,
  1,
  71,
  5,
  75,
  2,
  75,
  10,
  79,
  1,
  79,
  6,
  83,
  1,
  83,
  5,
  87,
  1,
  87,
  6,
  91,
  1,
  91,
  13,
  95,
  1,
  95,
  6,
  99,
  2,
  99,
  10,
  103,
  1,
  103,
  6,
  107,
  2,
  6,
  107,
  111,
  1,
  13,
  111,
  115,
  2,
  115,
  10,
  119,
  1,
  119,
  5,
  123,
  2,
  10,
  123,
  127,
  2,
  127,
  9,
  131,
  1,
  5,
  131,
  135,
  2,
  10,
  135,
  139,
  2,
  139,
  9,
  143,
  1,
  143,
  2,
  147,
  1,
  5,
  147,
  0,
  99,
  2,
  0,
  14,
  0
];

// const program = [2, 4, 4, 5, 99, 0];

const add = (pointer, program) => {
  const srcPos1 = program[pointer + 1];
  const srcPos2 = program[pointer + 2];
  const targetPosition = program[pointer + 3];
  program[targetPosition] = program[srcPos1] + program[srcPos2];
};

const multiply = (pointer, program) => {
  const srcPos1 = program[pointer + 1];
  const srcPos2 = program[pointer + 2];
  const targetPosition = program[pointer + 3];
  program[targetPosition] = program[srcPos1] * program[srcPos2];
};

const setup = (noun, verb, program) => {
  program[1] = noun;
  program[2] = verb;
}

const runProgram = (noun, verb, program) => {
  setup(noun, verb, program)
  let pointer = 0;
  let opcode = program[pointer];

  while (opcode != 99) {
    if (opcode == 1) {
      add(pointer, program);
    }
    if (opcode == 2) {
      multiply(pointer, program);
    }
    pointer = pointer + 4;
    opcode = program[pointer];
  }
  return program[0];
};


const tryProgram = () => {
  let solution;
  for(let noun = 0; noun <= 99; noun ++) {
    for(let verb = 0; verb <= 99; verb ++) {
      const program = [...initalProgram];
      const result = runProgram(noun, verb, program);
      if(result == 19690720) {
        solution = {
          verb,
          noun,
        }
        break;
      }
    }
  }
  return solution;
}
console.log('Starting experiments:');
const solution = tryProgram()
console.log('found a solution!')
console.log(solution)
console.log('The value we are looking for is ', 100 * solution.noun + solution.verb)
