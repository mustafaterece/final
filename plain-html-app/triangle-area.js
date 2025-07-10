function calculateTriangleArea() {
  const base = document.getElementById('triangleBase').value;
  const height = document.getElementById('triangleHeight').value;
  if (!base || !height) return;
  const area = (base * height) / 2;
  document.getElementById('triangleResult').innerText = `Alan: ${area}`;
} 