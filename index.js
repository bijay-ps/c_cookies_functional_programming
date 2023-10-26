// Pure function
let counter = 0;

// IMPURE FUNCTION
function changeCounter() {
  counter = counter + 1;
  console.log("counter: ", counter);
}

// changeCounter();
// changeCounter();
// changeCounter();

// console.log("counter outside: ", counter);

// This is also Impure
function log() {
  console.log("Printing on console");
}

// log();
// log();
// log();

// PURE Function
function multiply(i, j) {
  const varNum = Math.random() * 10;
  // Math.random() will generate a random value between 0 and 1
  // Math.sqrt()
  // Math.floor() 3.4 => 3
  // Math.ceil()
  const result = varNum * i * j;
  return result;
}

const res1 = multiply(2, 3);
const res2 = multiply(2, 3);
const res3 = multiply(2, 3);
const res4 = multiply(2, 3);

console.log(`res1: ${res1}, res2: ${res2}, res3: ${res3}, res4: ${res4}`);
