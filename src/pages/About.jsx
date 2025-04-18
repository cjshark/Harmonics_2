import { motion } from 'framer-motion';
import { FaMusic, FaGuitar, FaHeadphonesAlt, FaRocket, FaAward, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-extrabold mb-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[#FF3C38]">About Harmonics</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <span className="text-[#FF3C38] font-semibold">Harmonics</span>, we believe music is more than sound — it's emotion, expression, and power. 
              Born from a passion for rhythm and melody, we provide top-quality instruments and gear that empower musicians to perform at their best.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're just starting out or you're a seasoned pro, our carefully curated collection of guitars, audio gear, and accessories ensures 
              you'll always find what you need — with guidance and support along the way.
            </p>

            <motion.button
              className="bg-gradient-to-r from-[#FF3C38] to-[#FF6B52] text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-[#FF6B52] hover:to-[#FF3C38] transition-all duration-300 shadow-lg shadow-[#FF3C38]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden border border-[#FF3C38]/30 shadow-2xl shadow-[#FF3C38]/10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img 
              src="image/future-gear.png" 
              alt="About Harmonics" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Highlight Section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-black/80 border border-[#FF3C38]/20 rounded-xl shadow-md shadow-[#FF3C38]/10 hover:shadow-[#FF3C38]/30 transition-shadow">
            <FaMusic className="text-4xl text-[#FF3C38] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Passion for Music</h3>
            <p className="text-gray-400">Every product we offer is chosen with one goal: to elevate your sound.</p>
          </div>
          <div className="p-6 bg-black/80 border border-[#FF3C38]/20 rounded-xl shadow-md shadow-[#FF3C38]/10 hover:shadow-[#FF3C38]/30 transition-shadow">
            <FaRocket className="text-4xl text-[#FF3C38] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Innovative Gear</h3>
            <p className="text-gray-400">From classic tones to cutting-edge tech, we stay ahead of the curve.</p>
          </div>
          <div className="p-6 bg-black/80 border border-[#FF3C38]/20 rounded-xl shadow-md shadow-[#FF3C38]/10 hover:shadow-[#FF3C38]/30 transition-shadow">
            <FaAward className="text-4xl text-[#FF3C38] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Trusted Quality</h3>
            <p className="text-gray-400">We partner with top brands to bring you instruments you can rely on.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Harmonics Family?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our shop, get inspired, and let your music journey begin with us. Because music deserves more than just noise — it deserves soul.
          </p>
          <motion.button
            className="bg-[#FF3C38] hover:bg-[#FF6B52] text-white font-medium text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#FF3C38]/20"
            whileHover={{ scale: 1.05 }}
          >
            Visit the Shop
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
