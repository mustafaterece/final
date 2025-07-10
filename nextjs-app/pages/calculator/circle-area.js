import { useState } from "react";

export default function CircleArea() {
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!radius) return;
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    setResult({ area: area.toFixed(2), circumference: circumference.toFixed(2) });
  };

  return (
    <div>
      <h1>Daire Alan ve Çevre Hesaplama</h1>
      <input type="number" placeholder="Yarıçap" value={radius} onChange={e => setRadius(e.target.value)} />
      <button onClick={calculate}>Hesapla</button>
      {result && (
        <div>
          <div>Alan: {result.area}</div>
          <div>Çevre: {result.circumference}</div>
        </div>
      )}
    </div>
  );
} 