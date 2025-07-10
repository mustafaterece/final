import { useState } from "react";

export default function Average() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);

  const calculateAverage = () => {
    if (!numbers) return;
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numArray.length === 0) return;
    const average = numArray.reduce((sum, num) => sum + num, 0) / numArray.length;
    setResult(average.toFixed(2));
  };

  return (
    <div>
      <h1>Ortalama Hesaplama</h1>
      <input type="text" placeholder="Sayıları virgülle ayırarak girin (örn: 10, 20, 30)" value={numbers} onChange={e => setNumbers(e.target.value)} />
      <button onClick={calculateAverage}>Hesapla</button>
      {result && <div>Ortalama: {result}</div>}
    </div>
  );
} 