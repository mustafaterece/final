function calculateBodyFat() {
  const gender = document.getElementById('bodyFatGender').value;
  const age = document.getElementById('bodyFatAge').value;
  const height = document.getElementById('bodyFatHeight').value;
  const weight = document.getElementById('bodyFatWeight').value;
  const waist = document.getElementById('bodyFatWaist').value;
  if (!age || !height || !weight || !waist) return;
  let bodyFat;
  if (gender === 'male') {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist) + 0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist) + 0.22100 * Math.log10(height)) - 450;
  }
  document.getElementById('bodyFatResult').innerText = `Vücut Yağ Oranı: %${bodyFat.toFixed(2)}`;
} 