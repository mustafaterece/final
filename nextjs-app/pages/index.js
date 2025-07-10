import Head from 'next/head';
import Link from 'next/link';

const calculators = [
  { name: 'BMI Hesaplama', href: '/calculator/bmi', icon: '📊', color: 'from-blue-500 to-cyan-500' },
  { name: 'KDV Hesaplama', href: '/calculator/vat', icon: '💰', color: 'from-green-500 to-emerald-500' },
  { name: 'Faiz Hesaplama', href: '/calculator/interest', icon: '🏦', color: 'from-purple-500 to-pink-500' },
  { name: 'Yaş Hesaplama', href: '/calculator/age', icon: '🎂', color: 'from-red-500 to-orange-500' },
  { name: 'Dikdörtgen Alan/Çevre', href: '/calculator/rectangle-area', icon: '📐', color: 'from-indigo-500 to-blue-500' },
  { name: 'Daire Alan/Çevre', href: '/calculator/circle-area', icon: '⭕', color: 'from-pink-500 to-rose-500' },
  { name: 'Üçgen Alan', href: '/calculator/triangle-area', icon: '🔺', color: 'from-yellow-500 to-orange-500' },
  { name: 'Vücut Yağ Oranı', href: '/calculator/body-fat', icon: '💪', color: 'from-teal-500 to-cyan-500' },
  { name: 'IBAN Doğrulama', href: '/calculator/iban', icon: '🏛️', color: 'from-gray-500 to-slate-500' },
  { name: 'Taksitli Ödeme', href: '/calculator/installment', icon: '💳', color: 'from-violet-500 to-purple-500' },
  { name: 'Yüzde Hesaplama', href: '/calculator/percentage', icon: '📈', color: 'from-emerald-500 to-green-500' },
  { name: 'Ortalama Hesaplama', href: '/calculator/average', icon: '📊', color: 'from-blue-500 to-indigo-500' },
  { name: 'Not Ortalaması', href: '/calculator/grade-average', icon: '📚', color: 'from-amber-500 to-yellow-500' },
  { name: 'Zam Hesaplama', href: '/calculator/raise', icon: '📈', color: 'from-lime-500 to-green-500' },
  { name: 'Döviz Çevirici', href: '/calculator/currency', icon: '💱', color: 'from-cyan-500 to-blue-500' },
  { name: 'Saat/Dakika/Saniye', href: '/calculator/time-converter', icon: '⏰', color: 'from-orange-500 to-red-500' },
  { name: 'Hız/Zaman/Mesafe', href: '/calculator/speed-time-distance', icon: '🚗', color: 'from-red-500 to-pink-500' },
  { name: 'Asal Sayı Kontrolü', href: '/calculator/prime', icon: '🔢', color: 'from-purple-500 to-indigo-500' },
  { name: 'Faktöriyel Hesaplama', href: '/calculator/factorial', icon: '🧮', color: 'from-indigo-500 to-purple-500' },
  { name: 'Fibonacci Hesaplama', href: '/calculator/fibonacci', icon: '🌀', color: 'from-pink-500 to-rose-500' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Çok Fonksiyonlu Hesaplama Aracı</title>
        <meta name="description" content="20 farklı hesaplama fonksiyonu içeren web uygulaması" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate-gradient-move">
        <div className="relative z-10 w-full max-w-3xl mx-auto p-6 md:p-10 rounded-3xl shadow-2xl glass border border-white border-opacity-30 backdrop-blur-2xl animate-fadeInUp">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-fadeInUp">
              <span className="inline-block animate-float">🧮</span> Çok Fonksiyonlu Hesaplama Aracı
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {calculators.map((calculator, index) => (
              <Link
                key={index}
                href={calculator.href}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white bg-opacity-60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white border-opacity-30 backdrop-blur-xl card-hover animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-4xl md:text-5xl mb-2 group-hover:scale-125 transition-transform duration-300 animate-float">
                  {calculator.icon}
                </span>
                <span className="text-base md:text-lg font-semibold text-center leading-tight text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {calculator.name}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"></div>
              </Link>
            ))}
          </div>
        </div>
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 opacity-40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200 opacity-40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-200 opacity-30 rounded-full blur-3xl animate-float" style={{transform:'translate(-50%,-50%)'}}></div>
        </div>
      </div>
    </>
  );
} 