// claculator App

// Camelcase = firstNum
// snakecase = first_num

// function calculator() {
//   var firstNum = +prompt("Enter First Number");
//   var sign = prompt("Enter the sign you want to apply");
//   var lastNum = +prompt("Enter last Number");

//   var result;
//   var flag = true;

//   if (sign === "+") {
//     result = firstNum + lastNum;
//   } else if (sign === "-") {
//     result = firstNum - lastNum;
//   } else if (sign === "*") {
//     result = firstNum * lastNum;
//   } else if (sign === "/") {
//     result = firstNum / lastNum;
//   } else if (sign === "%") {
//     result = firstNum % lastNum;
//   } else {
//     document.getElementById("result").innerHTML = "Incorrect Expression";
//     flag = false;
//   }

//   if (flag) {
//     document.getElementById("result").innerHTML =
//       "This is the Result: " + result;
//   }
// }
// calculator();

// parameters
// function greetUser(name) {
//   alert("WELCOME " + name);
// }

// arguments
// greetUser("hassan")

var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDate(condition, text) {
  if (condition) {
    document.getElementById("result").innerHTML =
      text + day[new Date().getDay()];
  } else {
    var convertDate = prompt("enter your date");
    var date = new Date(convertDate);
    document.getElementById("result").innerHTML = text + day[date.getDay()];
  }
}
