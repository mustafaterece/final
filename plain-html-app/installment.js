function calculateInstallment() {
  const principal = document.getElementById('installmentPrincipal').value;
  const rate = document.getElementById('installmentRate').value;
  const months = document.getElementById('installmentMonths').value;
  if (!principal || !rate || !months) return;
  const monthlyRate = rate / 100;
  const installment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = installment * months;
  const totalInterest = totalPayment - principal;
  document.getElementById('installmentResult').innerText = 
    `Aylık Taksit: ${installment.toFixed(2)} TL, Toplam Ödeme: ${totalPayment.toFixed(2)} TL, Toplam Faiz: ${totalInterest.toFixed(2)} TL`;
} 