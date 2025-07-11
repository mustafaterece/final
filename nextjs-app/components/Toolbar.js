import Link from 'next/link';
import { useRouter } from 'next/router';

// Dosya adlarını Türkçe başlığa çeviren yardımcı fonksiyon
const fileToTitle = (filename) => {
  const map = {
    'bmi': 'Vücut Kitle İndeksi',
    'fibonacci': 'Fibonacci',
    'factorial': 'Faktöriyel',
    'prime': 'Asal Sayı',
    'speed-time-distance': 'Hız-Zaman-Mesafe',
    'time-converter': 'Zaman Dönüştürücü',
    'currency': 'Döviz',
    'raise': 'Zam Hesaplama',
    'grade-average': 'Not Ortalaması',
    'average': 'Ortalama',
    'percentage': 'Yüzde',
    'installment': 'Taksit',
    'iban': 'IBAN',
    'vat': 'KDV',
    'body-fat': 'Vücut Yağ Oranı',
    'triangle-area': 'Üçgen Alanı',
    'circle-area': 'Daire Alanı',
    'rectangle-area': 'Dikdörtgen Alanı',
    'age': 'Yaş',
    'interest': 'Faiz',
  };
  return map[filename] || filename.charAt(0).toUpperCase() + filename.slice(1);
};

// Statik olarak dosya adlarını ekliyoruz (dinamik import Next.js'de build-time'da zor)
const calculators = [
  'bmi','fibonacci','factorial','prime','speed-time-distance','time-converter','currency','raise','grade-average','average','percentage','installment','iban','vat','body-fat','triangle-area','circle-area','rectangle-area','age','interest'
];

export default function Toolbar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-20 bg-cyan-600 shadow-md mb-6">
      <div className="flex flex-wrap gap-2 p-3 justify-center">
        {calculators.map((calc) => (
          <Link key={calc} href={`/calculator/${calc}`} legacyBehavior>
            <a
              className={`transition-all duration-300 px-4 py-2 rounded-full font-semibold text-white shadow hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${router.asPath.includes(`/calculator/${calc}`) ? 'bg-cyan-800 scale-105' : 'bg-cyan-500'}`}
            >
              {fileToTitle(calc)}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
} 