import { useState } from "react";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export default function Prime() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const checkPrime = () => {
    if (!number) return;
    const num = parseInt(number);
    const isPrimeNumber = isPrime(num);
    setResult(isPrimeNumber);
  };

  return (
    <div>
      <h1>Asal Sayı Kontrolü</h1>
      <input type="number" placeholder="Sayı" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={checkPrime}>Kontrol Et</button>
      {result !== null && <div>{result ? "Asal sayı" : "Asal sayı değil"}</div>}
    </div>
  );
} 