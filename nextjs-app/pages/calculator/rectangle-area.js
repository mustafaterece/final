import { useState } from "react";

export default function RectangleArea() {
  const [short, setShort] = useState("");
  const [long, setLong] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!short || !long) return;
    const area = short * long;
    const perimeter = 2 * (parseFloat(short) + parseFloat(long));
    setResult({ area, perimeter });
  };

  return (
    <div>
      <h1>Dikdörtgen Alan ve Çevre Hesaplama</h1>
      <input type="number" placeholder="Kısa Kenar" value={short} onChange={e => setShort(e.target.value)} />
      <input type="number" placeholder="Uzun Kenar" value={long} onChange={e => setLong(e.target.value)} />
      <button onClick={calculate}>Hesapla</button>
      {result && (
        <div>
          <div>Alan: {result.area}</div>
          <div>Çevre: {result.perimeter}</div>
        </div>
      )}
    </div>
  );
} 