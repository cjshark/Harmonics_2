import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
<footer className="bg-black/80 backdrop-blur-xl border-t border-[#FF3C38]/20 py-8">
<div className="container mx-auto px-4">       
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
          <p className="text-white">Your one-stop shop for musical instruments and accessories.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent "><Facebook color='white'/></a>
              <a href="#" className="hover:text-accent "><Twitter color='white'/></a>
              <a href="#" className="hover:text-accent "><Instagram color='white'/></a>
              <a href="#" className="hover:text-accent "><Youtube color='white'/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-accent">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-accent">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-accent">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-accent">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-accent">Returns</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-accent">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full bg-accent text-white py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harmonics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}