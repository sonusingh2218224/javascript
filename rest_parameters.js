// rest parameters

function myFunc(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}
myFunc(2, 4, 5, 7, 6, 3, 6, 8);


// add sum of numbers

const myFunc1 = (...number) => {
  let total = 0;
  for (let num of number) {
    total = total + num;
  }
  return total;
};
const res = myFunc1(2, 3, 5, 6, 5, 6);
console.log(res);
