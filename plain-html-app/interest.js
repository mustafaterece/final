function calculateInterest() {
  const principal = document.getElementById('interestPrincipal').value;
  const rate = document.getElementById('interestRate').value;
  const months = document.getElementById('interestMonths').value;
  if (!principal || !rate || !months) return;
  const interest = (principal * rate * months) / 100;
  const total = parseFloat(principal) + interest;
  document.getElementById('interestResult').innerText = `Toplam Faiz: ${interest.toFixed(2)} TL, Toplam Geri Ödeme: ${total.toFixed(2)} TL`;
} 