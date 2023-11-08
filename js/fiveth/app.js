// var fruit = ["banana", "apple", "mango", "grapes"];

// array methods

// pop: pop removes one item from the end of the array
// fruit.pop();

// push: push add items at the end of the array
// fruit.push("pomogranate", "orange");

// shift: shift removes one item from the start of the array
// fruit.shift();

// unshift: unshift add items at the start of the array
// fruit.unshift("pomogranate", "orange");

// splice: splice add and remove items at any point of the array
// splice(start index, delete count, "pomogranate", "orange")

// fruit.splice(1, 2, "pomogranate", "orange"); both
// fruit.splice(1, 2); remove items
// fruit.splice(1, 0, "pomogranate", "orange"); add items

// slice: slice copies array items from any point (it is also a string method)
// slice subracts 1 from the second parameter
// var copyArr = fruit.slice(1, 3);

// console.log(fruit);
// console.log(copyArr);

// Loop
// To iterate anything

// Types of loops:
// 1. For Loop - loops through a block of code a number of times
// 2. While Loop - loops through a block of code while a specified condition is true
// 3. Do While Loop - also loops through a block of code while a specified condition is true

// for loop: It takes 3 expressions
// Expression 1 sets a variable before the loop starts (var i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.

// for (var x = 4; x <= 40; x += 4) {
//   console.log(x);
// }

// var y = 4;
// for (var x = 0; x < 10; x++) {
//   console.log("x: " + x, "y: " + y);
//   y = y + 4;
// }

// var city = prompt("Enter your favourite city name");
// var cityName = ["karachi", "punjab", "islamabad", "lahore"];

// if (city === cityName[0]) {
//   alert("karachi is great city");
// } else if (city === cityName[1]) {
//   alert("punjab is great city");
// } else if (city === cityName[2]) {
//   alert("islambad is great city");
// } else if (city === cityName[3]) {
//   alert("lahore is great city");
// } else {
//   alert("city should in Pakistan");
// }

// var flag = true;

// for (var i = 0; i < cityName.length; i++) {
//   if (city === cityName[i]) {
//     alert(city + " is great city");
//     flag = false;
//   }
//   console.log(city, cityName[i], flag);
// }

// if (flag) {
//   alert("city should in Pakistan");
// }
