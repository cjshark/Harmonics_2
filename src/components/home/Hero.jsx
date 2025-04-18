import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className=" px-20 relative min-h-screen flex items-center bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT: TEXT */}
          <motion.div
            className="text-center md:text-left max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white block mb-1">Keep Fit & Strum</span>
              <span className="text-[#FF3C38] block bg-clip-text">The beat of your Heart</span>
              <span className="text-white block">Strings</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg sm:text-xl mb-10 md:mb-12 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover instruments crafted to move you—from beginner basics to elite performance gear.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button className="px-8 py-4 text-lg shadow-md shadow-[#FF3C38]/30">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-black transition duration-300"
              >
                Buy Now
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: GUITAR WITH FIRE GLOW */}
          <motion.div
            className="w-full md:w-[50%] flex justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                },
              }}
            >
              <img
                src="image/guitar.png"
                alt="Guitar"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain z-10 relative group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full z-0 transition duration-500 opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #FF3C38 0%, transparent 70%)',
                  animation: 'flicker 1.2s infinite',
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 Flame Flicker Animation */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 0.9; transform: scale(1.01); }
          50% { opacity: 0.4; transform: scale(1.03); }
          100% { opacity: 0.9; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
