import { useState } from "react";

export default function Age() {
  const [birth, setBirth] = useState("");
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    if (!birth) return;
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setResult(age);
  };

  return (
    <div>
      <h1>Yaş Hesaplama</h1>
      <input type="date" value={birth} onChange={e => setBirth(e.target.value)} />
      <button onClick={calculateAge}>Hesapla</button>
      {result !== null && <div>Yaşınız: {result}</div>}
    </div>
  );
} 