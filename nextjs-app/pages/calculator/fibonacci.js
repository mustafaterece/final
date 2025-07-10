import { useState } from "react";

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

export default function Fibonacci() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFibonacci = () => {
    if (!number) return;
    const num = parseInt(number);
    const fibSequence = fibonacci(num);
    setResult(fibSequence.join(', '));
  };

  return (
    <div>
      <h1>Fibonacci Hesaplama</h1>
      <input type="number" placeholder="Kaç terim?" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={calculateFibonacci}>Hesapla</button>
      {result && <div>Fibonacci Dizisi: {result}</div>}
    </div>
  );
} 