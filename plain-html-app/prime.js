function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function checkPrime() {
  const number = document.getElementById('primeNumber').value;
  if (!number) return;
  const num = parseInt(number);
  const isPrimeNumber = isPrime(num);
  document.getElementById('primeResult').innerText = isPrimeNumber ? "Asal sayı" : "Asal sayı değil";
} 