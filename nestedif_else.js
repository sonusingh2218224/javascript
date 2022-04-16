let winingNumber = 18;
let userGuess = +prompt("Enter a Guess number");
if (userGuess === winingNumber) {
  console.log("you win ");
} else {
  if (userGuess < winingNumber) {
    console.log("too low");
  } else {
    console.log("to high");
  }
}
