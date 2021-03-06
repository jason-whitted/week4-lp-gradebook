function hideNameForm() {
  document.getElementById("name-form").classList.add("d-none");
}

function showNameForm() {
  document.getElementById("name-form").classList.remove("d-none");
}

function hideGradeForm() {
  document.getElementById("grade-form").classList.add("d-none");
}

function showGradeForm(grade) {
  document.getElementById("grade-form").classList.remove("d-none");
  document.querySelector("#grade-form input[readonly]").value = grade.name;
  startTimer();
}

hideGradeForm();

var student = {
  name: "",
  grades: [],
};
var currentGrades;

function submitName() {
  var input = document.querySelector("#name-form input");
  if (!input.value) {
    alert("Student name is required!");
    return;
  }

  student.name = input.value;

  var current = readStudent(student.name);
  if (current) {
    currentGrades = current.grades;
  }

  hideNameForm();
  showNextGradeForm();
}

function submitGrade() {
  stopTimer();

  var input = document.getElementById("txtGrade");
  var grade = Number.parseInt(input.value, 10);
  if (Number.isNaN(grade) || grade < 0 || grade > 100) {
    grade = 0;
  }
  student.grades.push(grade);

  showNextGradeForm();
}

function showNextGradeForm() {
  var assignment = assignments.shift();
  if (!assignment) {
    hideGradeForm();
    saveStudent();
    return;
  }

  if (currentGrades) {
    document.getElementById("txtGrade").value = currentGrades.shift();
  } else {
    document.getElementById("txtGrade").value = "";
  }

  showGradeForm(assignment);
}

function validateGrade() {
  var value = Number.parseInt(this.value, 10);
  if (Number.isNaN(value)) {
    this.classList.add("border");
    this.classList.add("border-danger");
  } else {
    this.classList.remove("border");
    this.classList.remove("border-danger");
  }
}

function readStudent(name) {
  var json = localStorage.getItem("students");
  if (json === null) {
    return undefined;
  }

  var students = JSON.parse(json);

  for (var x = 0; x < students.length; x++) {
    var current = students[x];
    if (current.name === name) {
      return current;
    }
  }

  return undefined;
}

function saveStudent() {
  var students = localStorage.getItem("students");
  if (students === null) {
    students = [];
  } else {
    students = JSON.parse(students);
  }

  students.push(student)

  var json = JSON.stringify(students);

  localStorage.setItem("students", json);

  window.location = "gradebook.html";
}

var remaining = 10;
var interval;

function startTimer() {
  remaining = 10;
  interval = setInterval(function tick() {
    var span = document.querySelector("#grade-form span");
    span.textContent = remaining + " seconds until auto-submit";

    remaining--;

    if (remaining <= 0) {
      submitGrade();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  remaining = 10;

  var span = document.querySelector("#grade-form span");
  span.textContent = remaining + " seconds until auto-submit";
}

document.querySelector("#name-form button").addEventListener("click", submitName);
document.querySelector("#grade-form button").addEventListener("click", submitGrade);
document.getElementById("txtGrade").addEventListener("keyup", validateGrade);
