import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Çok Fonksiyonlu Hesap Makinesi</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4 drop-shadow">
          Çok Fonksiyonlu Hesap Makinesi
        </h1>
        <p className="text-lg md:text-xl text-cyan-900 max-w-xl mb-6">
          Tüm hesaplama ihtiyaçlarınız için tek bir uygulama! Üstteki menüden istediğiniz hesap makinesini seçin ve kolayca kullanın. Finans, matematik, sağlık ve daha fazlası bir arada.
        </p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full shadow">
            Hesaplamaya başlamak için bir kategori seçin!
          </span>
        </motion.div>
      </motion.div>
    </>
  );
} 