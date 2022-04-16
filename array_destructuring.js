// array destructuring

const myArray = ["value1", "value2", "value3", "value4"];
// let new1 = [myArray[0]];
// console.log(new1);
// let new2 = [myArray[1]];
// console.log(new2);

// 2nd method
let [myvar1, myvar2, ...NewArray] = myArray;
console.log(myvar1);
console.log(myvar2);
console.log(NewArray);
