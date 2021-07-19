var currentDate = moment().format('MMMM Do YYYY'); // get current date
setTimeout(function(){document.getElementById("currentDay").textContent = currentDate;}, 50) // display inside the element

// Variables linking the time to the DOM
var h0900 = document.getElementById("9AM");
var h1000 = document.getElementById("10AM")
var h1100 = document.getElementById("11AM")
var h1200 = document.getElementById("12PM")
var h100 = document.getElementById("1PM")
var h200 = document.getElementById("2PM")
var h300 = document.getElementById("3PM")
var h400 = document.getElementById("4PM")
var h500 = document.getElementById("5PM")
var currentTime = moment().format("h A");
// color code the time-stamps to indicate past, present, or future
function timeColor() {
   if (h0900 > currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'red';
   } else if (h0900 < currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'teal';
   } else if (h0900 == currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'gold';
   }
   if (h1000 > currentTime) {
       document.getElementById("10AM").style.backgroundColor = 'red';
   } else if (h1000 < currentTime) {
      document.getElementById("10AM").style.backgroundColor = 'teal';
   } else if (h1000 == currentTime) {
      document.getElementById("10AM").style.backgroundColor = 'gold';
   }
   if (h1100 > currentTime) {
    document.getElementById("11AM").style.backgroundColor = 'red';
   } else if (h1100 < currentTime) {
   document.getElementById("11AM").style.backgroundColor = 'teal';
   } else if (h1100 == currentTime) {
   document.getElementById("11AM").style.backgroundColor = 'gold';
   }
   if (h1200 > currentTime) {
    document.getElementById("12PM").style.backgroundColor = 'red';
   } else if (h1200 < currentTime) {
   document.getElementById("12PM").style.backgroundColor = 'teal';
   } else if (h1200 == currentTime) {
   document.getElementById("12PM").style.backgroundColor = 'gold';
   }
   if (h100 < currentTime) {
    document.getElementById("1PM").style.backgroundColor = 'red';
   } else if (h1200 > currentTime) {
   document.getElementById("1PM").style.backgroundColor = 'teal';
   } else if (h1200 == currentTime) {
   document.getElementById("1PM").style.backgroundColor = 'gold';
   }
   if (h200 > currentTime) {
    document.getElementById("2PM").style.backgroundColor = 'red';
   } else if (h200 < currentTime) {
   document.getElementById("2PM").style.backgroundColor = 'teal';
   } else if (h200 == currentTime) {
   document.getElementById("2PM").style.backgroundColor = 'gold';
   }
   if (h300 > currentTime) {
    document.getElementById("3PM").style.backgroundColor = 'red';
   } else if (h300 < currentTime) {
   document.getElementById("3PM").style.backgroundColor = 'teal';
   } else if (h300 == currentTime) {
   document.getElementById("3PM").style.backgroundColor = 'gold';
   }
   if (h400 < currentTime) {
    document.getElementById("4PM").style.backgroundColor = 'red';
   } else if (h400 > currentTime) {
   document.getElementById("4PM").style.backgroundColor = 'teal';
   } else if (h400 == currentTime) {
   document.getElementById("4PM").style.backgroundColor = 'gold';
   }
   if (h500 < currentTime) {
    document.getElementById("5PM").style.backgroundColor = 'red';
   } else if (h500 > currentTime) {
   document.getElementById("5PM").style.backgroundColor = 'teal';
   } else if (h500 == currentTime) {
   document.getElementById("5PM").style.backgroundColor = 'gold';
   }
}

timeColor()