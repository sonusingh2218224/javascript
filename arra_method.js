// array puch pop

let fruits = ["sonu", "nitesh", "kum"];
console.log(fruits);
fruits.push("asha");
console.log(fruits);

fruits.pop();
console.log(fruits);

// inshift and shift

fruits.unshift("banana");
console.log(fruits);

fruits.shift();
console.log(fruits);

// forEach
// map
// filter
//reduce

const numbers = [4, 7, 8, 4];
function myFunc(numbers, index) {
  console.log(`index is ${index} and number is ${numbers}`);
}
for (let i = 0; i < numbers.length; i++) {
  myFunc(numbers[i], i);
}

// forEach
// all value are show index number and number

numbers.forEach(function (number) {
  console.log(number * 2);
});

numbers.forEach(myFunc);

const Data = [
  {
    firstname: "sonu ",
    lastname: "singh",
    roll: "2218224",
    sub: "pps",
  },
  {
    firstname: "asha ",
    lastname: "singh",
    roll: "221833",
    sub: "dsa",
  },
  {
    firstname: "kiran ",
    lastname: "singh",
    roll: "22184",
    sub: "ppl",
  },
];

Data.forEach((name) => {
  console.log(name.roll);
});

// map

const num = [5, 7, 9, 6];
const squuee = function (numb1) {
  return numb1 * numb1;
};
const newnum = num.map(squuee);
console.log(newnum);
