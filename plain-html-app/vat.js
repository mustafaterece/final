function calculateVAT() {
  const amount = document.getElementById('vatAmount').value;
  const rate = document.getElementById('vatRate').value;
  if (!amount || !rate) return;
  const vat = (amount * rate) / 100;
  const total = parseFloat(amount) + vat;
  document.getElementById('vatResult').innerText = `KDV: ${vat.toFixed(2)} TL, Toplam: ${total.toFixed(2)} TL`;
} 