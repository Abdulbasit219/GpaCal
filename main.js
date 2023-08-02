
let subjectCounter = 3; 

function addMoreSubject() {
    
    const newSubjectDiv = document.createElement("div");
    newSubjectDiv.className = "input-fields";

    const inputCourse = document.createElement("input");
    inputCourse.type = "text";
    inputCourse.name = "course" + subjectCounter; 
    // inputCourse.id = "course" + subjectCounter; 
    inputCourse.placeholder = "course " + parseInt(subjectCounter+1) ;

    const inputCredit = document.createElement("input");
    inputCredit.type = "text";
    inputCredit.name = "credit" + subjectCounter; 
    inputCredit.id = "Credit" + parseInt(subjectCounter); 
    inputCredit.placeholder = "Eg 3";

    const selectGrade = document.createElement("select");
    selectGrade.name = "grade" + subjectCounter;     
    selectGrade.id = "Grades" + parseInt(subjectCounter); 

    const grades = ["Select", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"];
    grades.map(grade => {
        const option = document.createElement("option");
        option.value = grade;
        option.textContent = grade;
        selectGrade.appendChild(option);
    });
 
    newSubjectDiv.appendChild(inputCourse);
    newSubjectDiv.appendChild(inputCredit);
    newSubjectDiv.appendChild(selectGrade);

    const container = document.querySelector(".inner-container");
    container.insertBefore(newSubjectDiv, document.querySelector(".more-sub-heading"));

    subjectCounter++;
}

const calculateGpa = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
  
    for (let i = 0; i < subjectCounter; i++) {
      const creditInput = document.getElementById(`Credit${i}`).value.trim();
      const credit = parseFloat(creditInput);
  
      const gradeInput = document.getElementById(`Grades${i}`).value;
      const gradingScale = {
        'A': 4.00,
        'A-': 3.66,
        'B+': 3.33,
        'B': 3.00,
        'B-': 2.66,
        'C+': 2.33,
        'C': 2.00,
        'C-': 1.66,
        'D+': 1.33,
        'D': 1.00,
        'F': 0.00,
      };
  
      if (gradingScale.hasOwnProperty(gradeInput)) {
        totalCredits += credit;
        totalGradePoints += gradingScale[gradeInput] * credit;
      }
    }
  
    const gpa = totalGradePoints / totalCredits;
    if(totalCredits === 0 && totalGradePoints === 0){
      return alert('Please Enter Credit hours and GradePoints for atleast one Course');
    }else{
    document.getElementById('show-result').innerHTML = `Your Current GPA is ${gpa}`
  }
}