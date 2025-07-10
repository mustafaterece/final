import { useState } from "react";

export default function Raise() {
  const [currentSalary, setCurrentSalary] = useState("");
  const [raisePercent, setRaisePercent] = useState("");
  const [result, setResult] = useState(null);

  const calculateRaise = () => {
    if (!currentSalary || !raisePercent) return;
    const raiseAmount = (currentSalary * raisePercent) / 100;
    const newSalary = parseFloat(currentSalary) + raiseAmount;
    setResult({ raiseAmount: raiseAmount.toFixed(2), newSalary: newSalary.toFixed(2) });
  };

  return (
    <div>
      <h1>Zam Hesaplama</h1>
      <input type="number" placeholder="Mevcut Maaş" value={currentSalary} onChange={e => setCurrentSalary(e.target.value)} />
      <input type="number" placeholder="Zam Oranı (%)" value={raisePercent} onChange={e => setRaisePercent(e.target.value)} />
      <button onClick={calculateRaise}>Hesapla</button>
      {result && (
        <div>
          <div>Zam Miktarı: {result.raiseAmount} TL</div>
          <div>Yeni Maaş: {result.newSalary} TL</div>
        </div>
      )}
    </div>
  );
} 