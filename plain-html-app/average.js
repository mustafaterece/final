function calculateAverage() {
  const numbers = document.getElementById('averageNumbers').value;
  if (!numbers) return;
  const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  if (numArray.length === 0) return;
  const average = numArray.reduce((sum, num) => sum + num, 0) / numArray.length;
  document.getElementById('averageResult').innerText = `Ortalama: ${average.toFixed(2)}`;
} 