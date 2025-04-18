import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: '#ORD-001',
      date: '2023-11-20',
      status: 'Delivered',
      total: 799.99
    },
    // Add more orders as needed
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Electric Guitar',
      price: 799.99,
      image: '/sample-guitar.jpg'
    },
    // Add more wishlist items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'orders' ? 'bg-accent text-white' : 'hover:bg-gray-100'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'wishlist' ? 'bg-accent text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'settings' ? 'bg-accent text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
              <button
                className="flex items-center space-x-2 w-full px-4 py-2 rounded-md text-red-500 hover:bg-red-50"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${order.total}</p>
                          <p className="text-sm text-green-500">{order.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map(item => (
                    <div key={item.id} className="border rounded-lg p-4 flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-accent font-bold">${item.price}</p>
                        <button className="mt-2 text-sm text-accent hover:text-red-600">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}