// const age = prompt("What is your age?");

// if (age < 18) {
//   console.log("You are too young to get pension");
// } else if (age > 25 && age < 39) {
//   console.log("You will get €500 pension");
// } else {
//   console.log("You will get €2000 pension");
// }

var age = prompt("What is your age?");
while (age < 18) {
  var age = prompt("You are too young to get pension");
}

var age = prompt("What is your age?");
while (age > 25) {
  var age = prompt("You will get €500 pension");
}
alert("Thank YOU!!");
