const person = {
  name: "Rameez Raja",
  age: 30,
};

// const composeFunc = (func1, func2) => {
//     return (x) => {
//         return func1(func2(x));
//     }
// }

// const composeFunc = (func1, func2) => {
//   return (x) => func1(func2(x))
// };

// const composeFunc = (func1, func2) => (x) => func1(func2(x));

const composeFunc = (func1, func2) => (x) => func1(func2(x));
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((initialInput, func) => func(initialInput), initialValue);

//fns = [getName, captializeName, addSalutation]
// 1. getName(person) => Rameez Raja
// 2. captializeName("Rameez Raja") => "RAMEEZ RAJA"
// 3. addSalutation("RAMEEZ RAJA") => "Mr. RAMEEZ RAJA"

function getName(user) {
  return user.name;
}

function captalizeTheName(str) {
  return str.toUpperCase();
}

function addSalutation(str) {
  return `Mr. ${str}`;
}

// Mr. RAMEEZ RAJA

// const fn = getName(person);
// console.log(fn);
// const capitals = captalizeTheName(getName(person));
// console.log(capitals);
// const withMr = addSalutation(capitals);
// console.log(withMr);

// console.log(addSalutation(captalizeTheName(getName(person))));

// const getUserNameInCaps = composeFunc(captalizeTheName, getName);
// console.log(getUserNameInCaps(person));
const getUserByPipe = pipe(getName, captalizeTheName, addSalutation);
console.log(getUserByPipe(person));
