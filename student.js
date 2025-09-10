  let mark = (prompt("Enter your marks")); // prompts the user to enter their marks
     let grade // declares a variable to hold the grade

      if (mark < 0 || mark > 100 || isNaN(mark)) {  // checks if the input is out of range or not a number
        grade = "Invalid input! Enter a number between 0 and 100.";  // sets the grade variable to an error message
      } 
      else if (mark >=79) {
        grade = "Grade A";
      }
       else if (mark >= 60) {
        grade = "Grade B";
      }
       else if (mark >= 49) {
        grade = "Grade C";
      }
       else if (mark >= 40) {
        grade = "Grade D";
      } 
      else {
        grade = "Grade E";
      }
  alert(grade); // displays the grade in an alert box
     