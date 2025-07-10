function calculateSpeedTimeDistance() {
  const speed = document.getElementById('speedTimeDistanceSpeed').value;
  const time = document.getElementById('speedTimeDistanceTime').value;
  const distance = document.getElementById('speedTimeDistanceDistance').value;
  if (!speed && !time && !distance) return;
  
  let calculatedValue;
  let unit;
  
  if (speed && time && !distance) {
    // Mesafe hesapla
    calculatedValue = speed * time;
    unit = "km";
    document.getElementById('speedTimeDistanceResult').innerText = `Mesafe: ${calculatedValue.toFixed(2)} ${unit}`;
  } else if (distance && time && !speed) {
    // Hız hesapla
    calculatedValue = distance / time;
    unit = "km/saat";
    document.getElementById('speedTimeDistanceResult').innerText = `Hız: ${calculatedValue.toFixed(2)} ${unit}`;
  } else if (distance && speed && !time) {
    // Zaman hesapla
    calculatedValue = distance / speed;
    unit = "saat";
    document.getElementById('speedTimeDistanceResult').innerText = `Zaman: ${calculatedValue.toFixed(2)} ${unit}`;
  } else {
    document.getElementById('speedTimeDistanceResult').innerText = "Lütfen sadece iki değer girin";
  }
} 