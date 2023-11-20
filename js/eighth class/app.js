// var name = "19.786";
// var convert = parseInt(name);
// var convert = parseFloat(name);
// console.log(typeof convert, convert);

// var num = 1;
// num += num;
// num = num + num

// num += 9;
// num = num + 9;
// console.log(num);

// var name = "1897887.7896786";
// var convert = Number(name);
// console.log(typeof convert, convert);

// var name = 97.89;
// var convert = name.toString();
// console.log(typeof convert, convert);

// camel Case
// var randomNum = Math.random();
// randomNum.toFixed(5)
// console.log(randomNum.toFixed());

// static mean stationary
// dynamic mean change
// hard coded (written in the code)

// date
// var d = new Date();

// var daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var monthArr = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// var date = d.getDate(); // date
// var day = d.getDay(); // day
// var getDay = daysArr[day];

// var month = d.getMonth(); // month
// var getMonth = monthArr[month];

// var year = d.getFullYear(); // year
// var hours = d.getHours() + 1; // hours
// var mins = d.getMinutes() + 1; // mins
// var secs = d.getSeconds() + 1; // secs
// var miliSecs = d.getMilliseconds(); // miliSecs
// var time = d.getTime(); // time

// console.log(d, date);
// console.log("Day:", day, getDay);
// console.log("Month:", month, getMonth);
// console.log("Year:", year);
// console.log("hours:", hours);
// console.log("mins:", mins);
// console.log("secs:", secs);
// console.log("miliSecs:", miliSecs);
// console.log("time:", time);

var dateTxt = "30 Oct 2023";
var daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var d = new Date(dateTxt);
var day = d.getDay(); // day
var getDay = daysArr[day];

console.log(dateTxt);
console.log(d);
console.log(day);
console.log(getDay);

var time = d.getTime(); // time
var currentTime = new Date().getTime(); // currentTime

var diff = currentTime - time;
var daysTillDoom = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(time, diff);
console.log(daysTillDoom);
