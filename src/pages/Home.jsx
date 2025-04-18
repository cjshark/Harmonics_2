import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { FaShippingFast, FaStar, FaGuitar } from 'react-icons/fa';
import { MdSupportAgent, MdSecurity } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: <FaStar className="text-accent text-5xl mb-4" />,
      title: 'Top-Quality Gear',
      description:
        'We source the finest guitars, amps, and accessories — trusted by pros worldwide.',
    },
    {
      icon: <MdSupportAgent className="text-accent text-5xl mb-4" />,
      title: '24/7 Expert Support',
      description:
        'Whether you’re a beginner or pro, our team is ready to help at every step.',
    },
    {
      icon: <FaShippingFast className="text-accent text-5xl mb-4" />,
      title: 'Lightning-Fast Shipping',
      description:
        'We deliver across the globe with tracked, secure, and fast shipping.',
    },
    {
      icon: <MdSecurity className="text-accent text-5xl mb-4" />,
      title: 'Secure Checkout',
      description:
        'Your data is protected with industry-grade encryption and safe payment gateways.',
    },
    {
      icon: <FaGuitar className="text-accent text-5xl mb-4" />,
      title: 'Huge Collection',
      description:
        'From vintage classics to modern beasts, explore a diverse lineup of instruments.',
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedProducts />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Why Musicians Trust Harmonics
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/80 border border-[#FF3C38]/20 p-8 rounded-2xl text-center shadow-lg hover:shadow-[#FF3C38]/30 transition-all duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 mt-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
