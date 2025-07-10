function calculateGradeAverage() {
  const grades = document.getElementById('gradeAverageGrades').value;
  const credits = document.getElementById('gradeAverageCredits').value;
  if (!grades || !credits) return;
  const gradeArray = grades.split(',').map(grade => parseFloat(grade.trim())).filter(grade => !isNaN(grade));
  const creditArray = credits.split(',').map(credit => parseFloat(credit.trim())).filter(credit => !isNaN(credit));
  if (gradeArray.length === 0 || creditArray.length === 0 || gradeArray.length !== creditArray.length) return;
  const totalPoints = gradeArray.reduce((sum, grade, index) => sum + (grade * creditArray[index]), 0);
  const totalCredits = creditArray.reduce((sum, credit) => sum + credit, 0);
  const average = totalPoints / totalCredits;
  document.getElementById('gradeAverageResult').innerText = `Not Ortalaması: ${average.toFixed(2)}`;
} 