function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function calculateFibonacci() {
  const number = document.getElementById('fibonacciNumber').value;
  if (!number) return;
  const num = parseInt(number);
  const fibSequence = fibonacci(num);
  document.getElementById('fibonacciResult').innerText = `Fibonacci Dizisi: ${fibSequence.join(', ')}`;
} 