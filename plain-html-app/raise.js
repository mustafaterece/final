function calculateRaise() {
  const currentSalary = document.getElementById('raiseCurrentSalary').value;
  const raisePercent = document.getElementById('raisePercent').value;
  if (!currentSalary || !raisePercent) return;
  const raiseAmount = (currentSalary * raisePercent) / 100;
  const newSalary = parseFloat(currentSalary) + raiseAmount;
  document.getElementById('raiseResult').innerText = 
    `Zam Miktarı: ${raiseAmount.toFixed(2)} TL, Yeni Maaş: ${newSalary.toFixed(2)} TL`;
} 