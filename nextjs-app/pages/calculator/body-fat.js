import { useState } from "react";

export default function BodyFat() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!age || !height || !weight || !waist) return;
    let bodyFat;
    if (gender === "male") {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }
    setResult(bodyFat.toFixed(2));
  };

  return (
    <div>
      <h1>Vücut Yağ Oranı Hesaplama</h1>
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="male">Erkek</option>
        <option value="female">Kadın</option>
      </select>
      <input type="number" placeholder="Yaş" value={age} onChange={e => setAge(e.target.value)} />
      <input type="number" placeholder="Boy (cm)" value={height} onChange={e => setHeight(e.target.value)} />
      <input type="number" placeholder="Kilo (kg)" value={weight} onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Bel Çevresi (cm)" value={waist} onChange={e => setWaist(e.target.value)} />
      {/* Kadınlar için kalça ve boyun çevresi de alınmalı */}
      <button onClick={calculate}>Hesapla</button>
      {result && <div>Vücut Yağ Oranı: %{result}</div>}
    </div>
  );
} 