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
      
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="calculator-container">
            <div className="text-center mb-8">
              <h1 className="calculator-title text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                🧮 Çok Fonksiyonlu Hesaplama Aracı
              </h1>
              
              <p className="text-gray-600 text-lg mt-4 mb-8">
                20 farklı hesaplama fonksiyonu ile ihtiyacınız olan tüm hesaplamaları yapın!
              </p>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">20 Hesaplama</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Responsive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Modern UI</span>
                </div>
              </div>
            </div>
            
            <div className="nav-container">
              <div className="nav-grid">
                {calculators.map((calculator, index) => (
                  <Link
                    key={index}
                    href={calculator.href}
                    className={`nav-link group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${calculator.color} border-0`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center space-y-2">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {calculator.icon}
                      </span>
                      <span className="text-sm font-medium text-center leading-tight">
                        {calculator.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm mt-8 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <p className="mb-2">💡 İpucu: İstediğiniz hesaplama fonksiyonunu seçerek kullanmaya başlayın!</p>
              <p className="text-xs opacity-75">Tüm hesaplamalar matematiksel doğruluk açısından test edilmiştir.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 