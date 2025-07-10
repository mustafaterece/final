import { useState } from "react";

export default function GradeAverage() {
  const [grades, setGrades] = useState("");
  const [credits, setCredits] = useState("");
  const [result, setResult] = useState(null);

  const calculateGradeAverage = () => {
    if (!grades || !credits) return;
    const gradeArray = grades.split(',').map(grade => parseFloat(grade.trim())).filter(grade => !isNaN(grade));
    const creditArray = credits.split(',').map(credit => parseFloat(credit.trim())).filter(credit => !isNaN(credit));
    if (gradeArray.length === 0 || creditArray.length === 0 || gradeArray.length !== creditArray.length) return;
    const totalPoints = gradeArray.reduce((sum, grade, index) => sum + (grade * creditArray[index]), 0);
    const totalCredits = creditArray.reduce((sum, credit) => sum + credit, 0);
    const average = totalPoints / totalCredits;
    setResult(average.toFixed(2));
  };

  return (
    <div>
      <h1>Not Ortalaması Hesaplama</h1>
      <input type="text" placeholder="Notları virgülle ayırarak girin (örn: 85, 90, 75)" value={grades} onChange={e => setGrades(e.target.value)} />
      <input type="text" placeholder="Kredileri virgülle ayırarak girin (örn: 3, 4, 2)" value={credits} onChange={e => setCredits(e.target.value)} />
      <button onClick={calculateGradeAverage}>Hesapla</button>
      {result && <div>Not Ortalaması: {result}</div>}
    </div>
  );
} 