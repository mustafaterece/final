import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    setResult(bmi);
    
    // BMI kategorisi belirleme
    if (bmi < 18.5) {
      setBmiCategory("Zayıf");
    } else if (bmi < 25) {
      setBmiCategory("Normal");
    } else if (bmi < 30) {
      setBmiCategory("Fazla Kilolu");
    } else {
      setBmiCategory("Obez");
    }
  };

  const getBmiColor = (category) => {
    switch(category) {
      case "Zayıf": return "text-blue-600";
      case "Normal": return "text-green-600";
      case "Fazla Kilolu": return "text-yellow-600";
      case "Obez": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <>
      <Head>
        <title>BMI Hesaplama - Çok Fonksiyonlu Hesaplama Aracı</title>
        <meta name="description" content="Vücut Kitle İndeksi (BMI) hesaplama aracı" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4 py-8">
          <div className="calculator-container">
            <div className="text-center mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                ← Ana Sayfaya Dön
              </Link>
              <h1 className="calculator-title">
                📊 BMI Hesaplama
              </h1>
              <p className="text-gray-600">
                Vücut Kitle İndeksinizi hesaplayın ve sağlık durumunuzu öğrenin
              </p>
            </div>

            <div className="space-y-4">
              <div className="input-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boy (cm)
                </label>
                <input
                  type="number"
                  placeholder="Örn: 175"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kilo (kg)
                </label>
                <input
                  type="number"
                  placeholder="Örn: 70"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="input-field"
                />
              </div>

              <button 
                onClick={calculateBMI}
                className="calculate-button"
              >
                🧮 BMI Hesapla
              </button>

              {result && (
                <div className="result-container">
                  <div className="text-2xl font-bold mb-2">
                    BMI: {result}
                  </div>
                  <div className={`text-lg font-semibold ${getBmiColor(bmiCategory)}`}>
                    Kategori: {bmiCategory}
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p><strong>BMI Kategorileri:</strong></p>
                    <p>• 18.5 altı: Zayıf</p>
                    <p>• 18.5-24.9: Normal</p>
                    <p>• 25-29.9: Fazla Kilolu</p>
                    <p>• 30+ üstü: Obez</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 