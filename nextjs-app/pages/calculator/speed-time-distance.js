import { useState } from "react";

export default function SpeedTimeDistance() {
  const [speed, setSpeed] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!speed && !time && !distance) return;
    
    let calculatedValue;
    let unit;
    
    if (speed && time && !distance) {
      // Mesafe hesapla
      calculatedValue = speed * time;
      unit = "km";
      setResult(`Mesafe: ${calculatedValue.toFixed(2)} ${unit}`);
    } else if (distance && time && !speed) {
      // Hız hesapla
      calculatedValue = distance / time;
      unit = "km/saat";
      setResult(`Hız: ${calculatedValue.toFixed(2)} ${unit}`);
    } else if (distance && speed && !time) {
      // Zaman hesapla
      calculatedValue = distance / speed;
      unit = "saat";
      setResult(`Zaman: ${calculatedValue.toFixed(2)} ${unit}`);
    } else {
      setResult("Lütfen sadece iki değer girin");
    }
  };

  return (
    <div>
      <h1>Hız/Zaman/Mesafe Hesaplama</h1>
      <input type="number" placeholder="Hız (km/saat)" value={speed} onChange={e => setSpeed(e.target.value)} />
      <input type="number" placeholder="Zaman (saat)" value={time} onChange={e => setTime(e.target.value)} />
      <input type="number" placeholder="Mesafe (km)" value={distance} onChange={e => setDistance(e.target.value)} />
      <button onClick={calculate}>Hesapla</button>
      {result && <div>{result}</div>}
    </div>
  );
} 