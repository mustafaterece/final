function calculateCircleArea() {
  const radius = document.getElementById('circleRadius').value;
  if (!radius) return;
  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;
  document.getElementById('circleResult').innerText = `Alan: ${area.toFixed(2)}, Çevre: ${circumference.toFixed(2)}`;
} 