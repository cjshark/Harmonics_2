import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'This field is required.';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setOrderSuccess(true);
    setTimeout(() => {
      alert('Order placed successfully!');
    }, 500);
  };

  const inputClass =
    "w-full px-4 py-2 bg-black/50 border border-[#FF3C38]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3C38]/50 transition-all";

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
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Billing & Payment Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-black/80 p-6 rounded-2xl border border-[#FF3C38]/20 shadow-lg shadow-[#FF3C38]/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <input
                  name="zipCode"
                  type="text"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </div>

            {/* Payment Section */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>Payment Details</span>
                <span className="text-sm text-green-400 ml-2">🔒 Secure</span>
              </h2>
              <div>
                <input
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <input
                    name="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>
                <div>
                  <input
                    name="cvv"
                    type="text"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button type="submit" variant="default" className="w-full mt-6">
                Place Order
              </Button>
            </motion.div>
          </motion.form>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/80 border border-[#FF3C38]/20 p-6 rounded-2xl shadow-lg shadow-[#FF3C38]/5 h-fit"
          >
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="divide-y divide-white/10 text-sm space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-4 pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Confirmation Modal */}
        {orderSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-black border border-green-500 p-8 rounded-2xl text-center shadow-lg"
            >
              <h2 className="text-2xl font-bold text-green-400 mb-4">🎉 Order Confirmed!</h2>
              <p className="text-white/80">Thank you for your purchase.</p>
              <button
                onClick={() => setOrderSuccess(false)}
                className="mt-6 px-6 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
