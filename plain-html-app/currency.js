const exchangeRates = {
  USD: { EUR: 0.85, TRY: 8.5, GBP: 0.73 },
  EUR: { USD: 1.18, TRY: 10.0, GBP: 0.86 },
  TRY: { USD: 0.12, EUR: 0.10, GBP: 0.086 },
  GBP: { USD: 1.37, EUR: 1.16, TRY: 11.6 }
};

function convertCurrency() {
  const amount = document.getElementById('currencyAmount').value;
  const fromCurrency = document.getElementById('currencyFrom').value;
  const toCurrency = document.getElementById('currencyTo').value;
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
  document.getElementById('currencyResult').innerText = `Sonuç: ${convertedAmount.toFixed(2)} ${toCurrency}`;
} 