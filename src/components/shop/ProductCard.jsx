import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Handle Buy Now (add to cart, then redirect to checkout)
  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-black/80 rounded-xl overflow-hidden group border border-[#FF3C38]/20 hover:border-[#FF3C38]/40 transition-all duration-300"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/3]">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <button className="p-2 bg-black/60 backdrop-blur-sm rounded-md hover:bg-[#FF3C38]/20 text-white border border-[#FF3C38]/30 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <h3 className="text-base font-semibold text-white group-hover:text-[#FF3C38] transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#FF3C38]">
            ${product.price}
          </span>
        </div>

        <div className="flex gap-3 mt-2">
          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-[#FF3C38] hover:bg-[#FF3C38]/80 transition-all"
          >
            <ShoppingCart className="inline-block w-4 h-4 mr-1" />
            Add to Cart
          </button>

          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
