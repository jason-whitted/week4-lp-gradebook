function populateTable() {
  var json = localStorage.getItem("students");
  if (json === null) {
    return;
  }

  var students = JSON.parse(json);

  students.sort(sortByStudentName);

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var tr = document.createElement("tr");
    document.querySelector("tbody").appendChild(tr);

    var tdName = document.createElement("td");
    tdName.textContent = student.name;
    tr.appendChild(tdName);

    var tdGrades = document.createElement("td");
    tdGrades.textContent = student.grades.toString();
    tr.appendChild(tdGrades);


    var tdAverage = document.createElement("td");
    tdAverage.textContent = average(student.grades);
    tr.appendChild(tdAverage);
  }
}

function sortByStudentName(studentA, studentB) {
  return studentA.name.localeCompare(studentB.name);
}

function average(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

populateTable();
