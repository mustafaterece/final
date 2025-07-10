import { useState } from "react";

const exchangeRates = {
  USD: { EUR: 0.85, TRY: 8.5, GBP: 0.73 },
  EUR: { USD: 1.18, TRY: 10.0, GBP: 0.86 },
  TRY: { USD: 0.12, EUR: 0.10, GBP: 0.086 },
  GBP: { USD: 1.37, EUR: 1.16, TRY: 11.6 }
};

export default function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    if (!amount || fromCurrency === toCurrency) return;
    let convertedAmount;
    if (fromCurrency === toCurrency) {
      convertedAmount = amount;
    } else if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
      convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    } else if (exchangeRates[toCurrency] && exchangeRates[toCurrency][fromCurrency]) {
      convertedAmount = amount / exchangeRates[toCurrency][fromCurrency];
    } else {
      convertedAmount = amount; // Aynı para birimi
    }
    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div>
      <h1>Döviz Çevirici</h1>
      <input type="number" placeholder="Miktar" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
        <option value="GBP">GBP</option>
      </select>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
        <option value="GBP">GBP</option>
      </select>
      <button onClick={convertCurrency}>Çevir</button>
      {result && <div>Sonuç: {result} {toCurrency}</div>}
    </div>
  );
} 