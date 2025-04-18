import { Link } from 'react-router-dom';
import { User, Menu } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import CartIcon from '../ui/CartIcon'; // ✅ make sure the path matches your structure

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-5 py-2 bg-black/80 backdrop-blur-xl border-b border-[#FF3C38]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:text-[#FF3C38] transition-colors">
            Harmonics
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#FF3C38] transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-300 hover:text-[#FF3C38] transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-300 hover:text-[#FF3C38] transition-colors">About</Link>
            <Link to="/blog" className="text-gray-300 hover:text-[#FF3C38] transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#FF3C38] transition-colors">Contact</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* ✅ Dynamic Cart Icon */}
            <CartIcon />

            <Link to="/login">
              <Button variant="outline" className="hidden md:flex items-center space-x-2 border-accent text-accent hover:bg-accent hover:text-white">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button 
              className="md:hidden text-gray-300 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-gradient-start to-gradient-end">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Home</Link>
              <Link to="/shop" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Shop</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">About</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
