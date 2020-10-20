/*
WHEN I click the start button
THEN I have to enter the student's name
WHEN I enter the student's name
THEN I am presented with a list of assignments that need to be graded
WHEN I enter a grade
THEN it must be a valid grade (number between 0 to 100)
WHEN I enter a grade
THEN I have 10 seconds to complete it or it moves on to the next grade
WHEN I enter all of the grades
THEN the student's grades are recorded to local storage
WHEN the student's grades are in local storage
THEN the grade input fields are pre-populated
WHEN an invalid grade is entered
THEN the input field will have a red border
WHEN an invalid grade is submitted
THEN the value 0 will be used
WHEN I click the gradebook link
THEN I am presented with the student's name (sorted), grades, and average
*/

function hideNameForm() {
  document.getElementById("name-form").classList.add("d-none");
}

function showNameForm() {
  document.getElementById("name-form").classList.remove("d-none");
}

function hideGradeForm() {
  document.getElementById("grade-form").classList.add("d-none");
}

function showGradeForm() {
  document.getElementById("grade-form").classList.remove("d-none");
}

hideGradeForm();

var studentName;

document.querySelector("#name-form button").addEventListener("click", function () {
  var input = document.querySelector("#name-form input");
  if (!input.value) {
    alert("Student name is required!");
    return;
  }

  studentName = input.value;
  hideNameForm();
  showGradeForm();
});
