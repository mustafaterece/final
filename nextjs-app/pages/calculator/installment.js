import { useState } from "react";

export default function Installment() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState(1.5);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState(null);

  const calculateInstallment = () => {
    if (!principal || !rate || !months) return;
    const monthlyRate = rate / 100;
    const installment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = installment * months;
    const totalInterest = totalPayment - principal;
    setResult({ 
      installment: installment.toFixed(2), 
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  return (
    <div>
      <h1>Taksitli Ödeme Hesaplama</h1>
      <input type="number" placeholder="Anapara" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Aylık Faiz Oranı (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Taksit Sayısı" value={months} onChange={e => setMonths(e.target.value)} />
      <button onClick={calculateInstallment}>Hesapla</button>
      {result && (
        <div>
          <div>Aylık Taksit: {result.installment} TL</div>
          <div>Toplam Ödeme: {result.totalPayment} TL</div>
          <div>Toplam Faiz: {result.totalInterest} TL</div>
        </div>
      )}
    </div>
  );
} 