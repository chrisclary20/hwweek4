var currentDate = moment().format('MMMM Do YYYY'); // get current date
setTimeout(function(){document.getElementById("currentDay").textContent = currentDate;}, 1000) // display inside the element

// color code the time-stamps to indicate past, present, or future
var h0900 = document.getElementById("9AM");
var currentTime = moment().format("h A");
function timeColor() {
   if (h0900 > currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'red';
   } else if (h0900 < currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'teal';
   } else if (h0900 == currentTime) {
       document.getElementById("9AM").style.backgroundColor = 'gold'
   }
}

timeColor()