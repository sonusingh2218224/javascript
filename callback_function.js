// callback functions
function myFunc(callback) {
  console.log("hello world");
  callback();
}

function myFunc2() {
  console.log("hello sonu singh");
}
myFunc(myFunc2);
