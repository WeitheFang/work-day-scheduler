var timeDisplayEl = $(`#currentDay`);
var timeBlockEl = $(`.time-block`);
var saveButton = $(`.saveBtn`);
var currentDay = dayjs();
var currentHour = currentDay.format(`HH`);

// console.log(currentHour);

saveButton.on(`click`, saveInputToStorage);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
function saveInputToStorage() {
  var userInput = $(this).siblings(`.description`).val();
  var timeID = $(this).parent().attr(`id`);
  // console.log(timeID);
  // console.log(userInput);
  localStorage.setItem(timeID, userInput);
}

//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
function colorDisplay() {
  timeBlockEl.each(function () {
    timeID = parseInt($(this).attr(`id`).split("hour-")[1]);
    // console.log(timeID);
    if (timeID < currentHour) {
      $(this).addClass(`past`);
      $(this).removeClass(`present`);
      $(this).removeClass(`future`);
    } else if (currentHour == timeID) {
      $(this).addClass(`present`);
      $(this).removeClass(`past`);
      $(this).removeClass(`future`);
    } else {
      $(this).addClass(`future`);
      $(this).removeClass(`present`);
      $(this).removeClass(`past`);
    }
  });
}

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
function displayUserInput() {
  $(`#hour-9 .description`).val(localStorage.getItem(`hour-9`));
  $(`#hour-10 .description`).val(localStorage.getItem(`hour-10`));
  $(`#hour-11 .description`).val(localStorage.getItem(`hour-11`));
  $(`#hour-12 .description`).val(localStorage.getItem(`hour-12`));
  $(`#hour-13 .description`).val(localStorage.getItem(`hour-13`));
  $(`#hour-14 .description`).val(localStorage.getItem(`hour-14`));
  $(`#hour-15 .description`).val(localStorage.getItem(`hour-15`));
  $(`#hour-16 .description`).val(localStorage.getItem(`hour-16`));
  $(`#hour-17 .description`).val(localStorage.getItem(`hour-17`));
}

// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  saveInputToStorage();
  displayTime();
  displayUserInput();
  colorDisplay();
  setInterval(displayTime, 1000);
});
