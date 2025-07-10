function validateIBAN(iban) {
  iban = iban.replace(/\s+/g, '').toUpperCase();
  if (!iban.match(/^([A-Z]{2})(\d{2})([A-Z0-9]{1,30})$/)) return false;
  iban = iban.slice(4) + iban.slice(0, 4);
  iban = iban.replace(/[A-Z]/g, ch => (ch.charCodeAt(0) - 55));
  let remainder = iban, block;
  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  return parseInt(remainder, 10) % 97 === 1;
}

function checkIBAN() {
  const iban = document.getElementById('ibanInput').value;
  const result = validateIBAN(iban);
  document.getElementById('ibanResult').innerText = result ? 'Geçerli IBAN' : 'Geçersiz IBAN';
} 