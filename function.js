// reuseable function

// function declearation
//function expression

const Addnumber = function (num1, num2) {
  return num1 + num2;
};

const returnNumber = Addnumber(4, 6);
console.log(returnNumber);

//function to check odd and even
function IsEven(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("false");
  }
}

console.log(IsEven(10));

// function expression

// function that input string and give output of an firstcharacter

function StringData(str) {
  return str[0];
}
console.log(StringData("sonu"));

// function input array, target
//output target is stored in array then print an index of array
//output is not here in array then print -1

function Array1(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [4, 5, 6, 7];
const ans = Array1(myArray, 5);
console.log(ans);
