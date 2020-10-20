# Week 4: Live Programming: Gradebook

In this live programming session we are going to create a Gradebook utilizing:
- DOM
- setInterval
- localStorage

## User Story
```
AS an instructor 
I WANT to fill out student's grades in a gradebook
SO THAT I can guage their progress
```

## Acceptance Criteria
```
GIVEN I am using the gradebook
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
```
