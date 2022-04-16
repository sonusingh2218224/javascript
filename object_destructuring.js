//object destructuring
const person = {
  name: "sonu singh",
  roll: 2218224,
  branch: "cse",
};
const { name, ...college } = person;
console.log(name);
console.log(college);

// param destructuring

// obejct
// react
// object destructuring are use in react js so very important concept

function printDetails({ name, roll, branch }) {
  console.log(name);
  console.log(roll);
  console.log(branch);
}
printDetails(person);
