import { useState } from "react";

export default function TimeConverter() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [result, setResult] = useState(null);

  const convertTime = () => {
    if (!hours && !minutes && !seconds) return;
    const totalSeconds = (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
    const totalMinutes = totalSeconds / 60;
    const totalHours = totalSeconds / 3600;
    setResult({
      totalSeconds,
      totalMinutes: totalMinutes.toFixed(2),
      totalHours: totalHours.toFixed(2)
    });
  };

  return (
    <div>
      <h1>Saat/Dakika/Saniye Dönüştürücü</h1>
      <input type="number" placeholder="Saat" value={hours} onChange={e => setHours(e.target.value)} />
      <input type="number" placeholder="Dakika" value={minutes} onChange={e => setMinutes(e.target.value)} />
      <input type="number" placeholder="Saniye" value={seconds} onChange={e => setSeconds(e.target.value)} />
      <button onClick={convertTime}>Dönüştür</button>
      {result && (
        <div>
          <div>Toplam Saniye: {result.totalSeconds}</div>
          <div>Toplam Dakika: {result.totalMinutes}</div>
          <div>Toplam Saat: {result.totalHours}</div>
        </div>
      )}
    </div>
  );
} 