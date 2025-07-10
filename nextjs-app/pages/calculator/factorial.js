import { useState } from "react";

function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default function Factorial() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    if (!number) return;
    const num = parseInt(number);
    const fact = factorial(num);
    setResult(fact);
  };

  return (
    <div>
      <h1>Faktöriyel Hesaplama</h1>
      <input type="number" placeholder="Sayı" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={calculateFactorial}>Hesapla</button>
      {result !== null && <div>Faktöriyel: {result}</div>}
    </div>
  );
} 