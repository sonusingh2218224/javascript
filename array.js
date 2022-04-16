// refernce type
// intro to array
//refernce types are an object

// ordered collection of items
let fruits = ["mango", "apple", "lichi"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));

// for loop in array
let fruit2 = [];
for (let i = 0; i <= fruits.length - 1; i++) {
  fruit2.push(fruits[i].toUpperCase());
}

console.log(fruit2);


// while loop in array
let arr = 0;
while (arr < fruits.length) {
  console.log(fruits[arr].toUpperCase());
  arr++;
}
