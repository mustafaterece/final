import { useState } from "react";

export default function Percentage() {
  const [number, setNumber] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    if (!number || !percent) return;
    const result = (number * percent) / 100;
    setResult(result.toFixed(2));
  };

  return (
    <div>
      <h1>Yüzde Hesaplama</h1>
      <input type="number" placeholder="Sayı" value={number} onChange={e => setNumber(e.target.value)} />
      <input type="number" placeholder="Yüzde (%)" value={percent} onChange={e => setPercent(e.target.value)} />
      <button onClick={calculatePercentage}>Hesapla</button>
      {result && <div>Sonuç: {result}</div>}
    </div>
  );
} 