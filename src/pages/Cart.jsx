import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
  const shippingCost = cartItems.length > 0 ? 9.99 : 0;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-8 text-center"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-8"
          >
            Your Cart is Empty
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="default" onClick={() => navigate('/shop')}>
              Continue Shopping
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-10"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-10 text-center md:text-left"
        >
          Your Shopping Cart
        </motion.h1>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-black/80 border border-[#FF3C38]/20 p-4 rounded-2xl shadow-lg shadow-[#FF3C38]/5 hover:border-[#FF3C38]/40 transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">
                      Unit Price: <span className="text-white font-medium">${item.price.toFixed(2)}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Subtotal: <span className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>

                  <div className="flex items-center mt-4 md:mt-0 gap-3">
                    <button 
                      className="p-2 rounded-md border border-gray-600 hover:bg-white/10 transition-all"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      className="p-2 rounded-md border border-gray-600 hover:bg-white/10 transition-all"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    className="text-red-500 hover:text-red-700 ml-4 mt-4 md:mt-0 transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/80 border border-[#FF3C38]/20 p-6 rounded-2xl shadow-lg shadow-[#FF3C38]/5 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="text-white">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-white">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 font-bold text-lg">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>${(getCartTotal() + shippingCost).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
