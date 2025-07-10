import { useState } from "react";

export default function VAT() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(18);
  const [result, setResult] = useState(null);

  const calculateVAT = () => {
    if (!amount || !rate) return;
    const vat = (amount * rate) / 100;
    const total = parseFloat(amount) + vat;
    setResult({ vat: vat.toFixed(2), total: total.toFixed(2) });
  };

  return (
    <div>
      <h1>KDV Hesaplama</h1>
      <input type="number" placeholder="Tutar" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="number" placeholder="KDV Oranı (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <button onClick={calculateVAT}>Hesapla</button>
      {result && (
        <div>
          <div>KDV: {result.vat} TL</div>
          <div>Toplam: {result.total} TL</div>
        </div>
      )}
    </div>
  );
} 