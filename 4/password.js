const numToArray = num => {
  const stringArray = Array.from(`${num}`);
  return stringArray.map(str => parseInt(str, 10));
};

const check = num => {
  const digits = numToArray(num);
  let hasDouble = false;
  let hasDecrease = false;
  let prev = 0;
  digits.forEach(value => {
    if (value === prev) {
      hasDouble = true;
    }
    if (value < prev) {
      hasDecrease = true;
    }
    prev = value;
  });
  return hasDouble && !hasDecrease;
};

const check2 = num => {
  const digits = numToArray(num);
  let hasDouble = false;
  let hasDecrease = false;
  let prev = 0;
  let prevprev = 0;
  digits.forEach((value, idx) => {
    const next = digits.length > idx ? digits[idx + 1] : 0;
    if (value === prev && value != next && value != prevprev) {
      hasDouble = true;
    }
    if (value < prev) {
      hasDecrease = true;
    }
    prevprev = prev;
    prev = value;
  });
  return hasDouble && !hasDecrease;
};

const countValidNumbers = (min, max, checkFunc) => {
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (checkFunc(i)) {
      count++;
    }
  }
  return count;
};

const min = 172930;
const max = 683082;
console.log("counting valid numbers");
const count = countValidNumbers(min, max, check2);
console.log("valid numbers:", count);

module.exports = { numToArray, check, check2, countValidNumbers };
