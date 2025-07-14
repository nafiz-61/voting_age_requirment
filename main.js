let userInput = prompt("Enter Your age");
let age = +userInput;

if (age >= 0 && age <= 17) {
  alert("Not allow for Voting");
} else if (age >= 18 && age <= 75) {
  alert("Allow for voting");
} else if (age >= 76 && age <= 100) {
  alert("Your voting age has expired");
} else {
  alert("Not accepted");
}
