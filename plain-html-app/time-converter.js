function convertTime() {
  const hours = document.getElementById('timeHours').value;
  const minutes = document.getElementById('timeMinutes').value;
  const seconds = document.getElementById('timeSeconds').value;
  if (!hours && !minutes && !seconds) return;
  const totalSeconds = (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
  const totalMinutes = totalSeconds / 60;
  const totalHours = totalSeconds / 3600;
  document.getElementById('timeResult').innerText = 
    `Toplam Saniye: ${totalSeconds}, Toplam Dakika: ${totalMinutes.toFixed(2)}, Toplam Saat: ${totalHours.toFixed(2)}`;
} 