import { useState } from "react";

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

export default function IBAN() {
  const [iban, setIban] = useState("");
  const [result, setResult] = useState(null);

  const checkIBAN = () => {
    setResult(validateIBAN(iban));
  };

  return (
    <div>
      <h1>IBAN Doğrulama</h1>
      <input type="text" placeholder="IBAN" value={iban} onChange={e => setIban(e.target.value)} />
      <button onClick={checkIBAN}>Kontrol Et</button>
      {result !== null && (
        <div>{result ? "Geçerli IBAN" : "Geçersiz IBAN"}</div>
      )}
    </div>
  );
} 