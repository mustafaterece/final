function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculateFactorial() {
  const number = document.getElementById('factorialNumber').value;
  if (!number) return;
  const num = parseInt(number);
  const fact = factorial(num);
  document.getElementById('factorialResult').innerText = `Faktöriyel: ${fact}`;
} 