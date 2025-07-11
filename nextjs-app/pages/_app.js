import '../styles/globals.css';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Toolbar from '../components/Toolbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-cyan-50">
      <Toolbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="p-4 max-w-2xl mx-auto"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp; 