function calculatePercentage() {
  const number = document.getElementById('percentageNumber').value;
  const percent = document.getElementById('percentagePercent').value;
  if (!number || !percent) return;
  const result = (number * percent) / 100;
  document.getElementById('percentageResult').innerText = `Sonuç: ${result.toFixed(2)}`;
} 