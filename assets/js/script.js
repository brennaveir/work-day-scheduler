//Global variables
var saveBtnEl = $('.saveBtn');
var allTextAreas= $('.description')

function displayEvents () {
//code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
for (var i = 9; i <= 17; i++) {
  var savedEvents = localStorage.getItem("hour-" + i)
$("#hour-" + i + " .description").val(savedEvents)
}
}
//code using the id in the containing time-block as a key to save the user input in
// local storage. 
 function saveEvent () {
  var userInput = $(this).siblings(".description").val();
  var userTime = $(this).parent().attr("id")
  localStorage.setItem(userTime, userInput)
  }
  //listener for click events on the save button. 
$(document).ready(function() {
  
saveBtnEl.on('click', saveEvent);
displayEvents()

//code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
var currentTime = dayjs().hour()
console.log(currentTime)
allTextAreas.each(function (){
  var textAreaTime = $(this).parent().attr("id").split('-')[1]
  if (textAreaTime == currentTime) {
    $(this).addClass("present")
  }
  if (textAreaTime < currentTime){
    $(this).addClass("past")
  }
  if (textAreaTime > currentTime) {
    $(this).addClass("future")
  }
})
//Code to display the current date in the header of the page.
var displayDate = dayjs()
$('#currentDay').text(displayDate.format('dddd MMM D, YYYY'));
});
