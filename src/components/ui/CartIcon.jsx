import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartIcon() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
      <ShoppingCart className="text-white w-6 h-6 hover:text-[#FF3C38] transition-colors" />
      
      <AnimatePresence>
        {totalQuantity > 0 && (
          <motion.div
            key="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-[#FF3C38] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md"
          >
            {totalQuantity}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
