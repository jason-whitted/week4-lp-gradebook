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
}

hideGradeForm();

var student = {
  name: "",
  grades: [],
};

function submitName() {
  var input = document.querySelector("#name-form input");
  if (!input.value) {
    alert("Student name is required!");
    return;
  }

  student.name = input.value;
  hideNameForm();
  showNextGradeForm();
}

function submitGrade() {
  var input = document.getElementById("txtGrade");
  var grade = Number.parseInt(input.value, 10);
  if (Number.isNaN(grade) || grade < 0 || grade > 100) {
    grade = 0;
  }
  student.grades.push(grade);
  console.log("student", student);
}




// WHEN I enter the student's name
// THEN I am presented with a list of assignments that need to be graded
function showNextGradeForm() {
  var assignment = assignments.shift();
  if (!assignment) {
    alert("TODO: Out of assignments");
    return;
  }

  // WHEN the student's grades are in local storage
  // THEN the grade input fields are pre-populated

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






// WHEN I enter a grade
// THEN I have 10 seconds to complete it or it moves on to the next grade

// WHEN I enter all of the grades
// THEN the student's grades are recorded to local storage




document.querySelector("#name-form button").addEventListener("click", submitName);
document.querySelector("#grade-form button").addEventListener("click", submitGrade);
document.getElementById("txtGrade").addEventListener("keyup", validateGrade);
