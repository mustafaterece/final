import { useState } from "react";

export default function TriangleArea() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!base || !height) return;
    const area = (base * height) / 2;
    setResult(area);
  };

  return (
    <div>
      <h1>Üçgen Alan Hesaplama</h1>
      <input type="number" placeholder="Taban" value={base} onChange={e => setBase(e.target.value)} />
      <input type="number" placeholder="Yükseklik" value={height} onChange={e => setHeight(e.target.value)} />
      <button onClick={calculate}>Hesapla</button>
      {result !== null && <div>Alan: {result}</div>}
    </div>
  );
} 