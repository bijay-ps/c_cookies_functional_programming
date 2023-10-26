const candidate = {
  name: "Ramesh",
  age: 27,
  isEmployed: false,
};

// Mutable, not a preferred way
// function isInterviewed(flag) {
//   if (flag) {
//     candidate.isEmployed = true;
//   } else {
//     candidate.isEmployed = false;
//   }
//   return candidate;
// }

// console.log(isInterviewed(true));

function isInterviewedAgain(flag) {
  const copiedObj = { ...candidate };
  if (flag) {
    copiedObj.isEmployed = true;
  } else {
    copiedObj.isEmployed = false;
  }
  return copiedObj;
}

console.log(isInterviewedAgain(true));
console.log(candidate);
