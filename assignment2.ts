
let marks = Number(prompt("Enter your math marks"));
  let grade; 
  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else if (marks >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  alert(grade);
