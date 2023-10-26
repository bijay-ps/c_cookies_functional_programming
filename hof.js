const arr = [1, 2, 3];

// Function as a parameter
// arr.forEach((e) => console.log(e));

function doubleTheVal(nums) {
  // closure concept is in play here, that's why nums is accessible in the child fucntion
  return function () {
    return nums.map((e) => e * 2);
  };
}

const result = doubleTheVal([2, 5, 8]);
console.log(result());

// Abstracts the implementation details
function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
