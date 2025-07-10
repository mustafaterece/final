function calculateRectangleArea() {
  const short = document.getElementById('rectShort').value;
  const long = document.getElementById('rectLong').value;
  if (!short || !long) return;
  const area = short * long;
  const perimeter = 2 * (parseFloat(short) + parseFloat(long));
  document.getElementById('rectResult').innerText = `Alan: ${area}, Çevre: ${perimeter}`;
} 