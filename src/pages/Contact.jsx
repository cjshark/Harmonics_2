import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[#FF3C38]">Get in Touch</span>
        </motion.h1>

        <motion.div 
          className="max-w-2xl mx-auto bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-[#FF3C38]/30 shadow-2xl shadow-[#FF3C38]/5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <form className="space-y-8">
            <div>
              <label className="text-white text-lg font-medium mb-3 block">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-black/60 text-white border border-[#FF3C38]/30 rounded-xl p-4 focus:border-[#FF3C38] outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="text-white text-lg font-medium mb-3 block">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-black/60 text-white border border-[#FF3C38]/30 rounded-xl p-4 focus:border-[#FF3C38] outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="text-white text-lg font-medium mb-3 block">Message</label>
              <textarea 
                placeholder="Write your message here..."
                className="w-full bg-black/60 text-white border border-[#FF3C38]/30 rounded-xl p-4 focus:border-[#FF3C38] outline-none h-40 placeholder:text-gray-500"
              ></textarea>
            </div>
            <Button 
              className="w-full py-4 text-lg font-medium bg-gradient-to-r from-[#FF3C38] to-[#FF6B52] hover:from-[#FF6B52] hover:to-[#FF3C38] transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}