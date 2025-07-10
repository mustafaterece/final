import { useState } from "react";

export default function Interest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState(1.5);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    if (!principal || !rate || !months) return;
    const interest = (principal * rate * months) / 100;
    const total = parseFloat(principal) + interest;
    setResult({ interest: interest.toFixed(2), total: total.toFixed(2) });
  };

  return (
    <div>
      <h1>Faiz Hesaplama</h1>
      <input type="number" placeholder="Anapara" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Aylık Faiz Oranı (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Vade (Ay)" value={months} onChange={e => setMonths(e.target.value)} />
      <button onClick={calculateInterest}>Hesapla</button>
      {result && (
        <div>
          <div>Toplam Faiz: {result.interest} TL</div>
          <div>Toplam Geri Ödeme: {result.total} TL</div>
        </div>
      )}
    </div>
  );
} 