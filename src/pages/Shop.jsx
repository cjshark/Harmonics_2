import { useState } from 'react';
import ProductCard from '../components/shop/ProductCard';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = ['all', 'guitars', 'drums', 'keyboards', 'accessories'];

  // Add sample products data
  const products = [
    {
      id: 1,
      name: 'Electric Guitar',
      price: 799.99,
      category: 'guitars',
      image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=500'
    },
    {
      id: 2,
      name: 'Acoustic Drum Set',
      price: 1299.99,
      category: 'drums',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500'
    },
    {
      id: 3,
      name: 'Digital Piano',
      price: 899.99,
      category: 'keyboards',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=500'
    },
    {
      id: 4,
      name: 'Bass Guitar',
      price: 699.99,
      category: 'guitars',
      image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500'
    },
    {
      id: 5,
      name: 'Electronic Drum Kit',
      price: 1499.99,
      category: 'drums',
      image: 'https://images.unsplash.com/photo-1580625528104-830b09667e3b?w=500'
    },
    {
      id: 6,
      name: 'Synthesizer',
      price: 1199.99,
      category: 'keyboards',
      image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=500'
    },
    {
      id: 7,
      name: 'Acoustic Guitar',
      price: 499.99,
      category: 'guitars',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500'
    },
    {
      id: 8,
      name: 'Guitar Pedal Set',
      price: 299.99,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1527865118650-b28bc059d09a?w=500'
    },
    {
      id: 9,
      name: 'Professional Microphone',
      price: 249.99,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500'
    },
    {
      id: 10,
      name: 'MIDI Controller',
      price: 199.99,
      category: 'keyboards',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500'
    },
    {
      id: 11,
      name: 'Drum Cymbal Pack',
      price: 399.99,
      category: 'drums',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500'
    },
    {
      id: 12,
      name: 'Guitar Amplifier',
      price: 599.99,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=500'
    },
    {
      id: 13,
      name: 'Classical Guitar',
      price: 699.99,
      category: 'guitars',
      image: 'https://images.unsplash.com/photo-1555601568-c9e6f328489b?w=500'
    }
  ];

  // Filter products based on category and price
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-6xl font-bold mb-12 text-center">
        <span className="text-white">Our</span>{' '}
        <span className="text-[#FF3C38]">Collection</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1 space-y-6 bg-black/80 p-8 rounded-2xl border-2 border-[#FF3C38]/20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Categories
            </h3>
            <div className="space-y-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-300 text-lg ${
                    activeCategory === category 
                      ? 'bg-[#FF3C38] text-white font-bold shadow-lg shadow-[#FF3C38]/50' 
                      : 'text-white hover:bg-[#FF3C38]/10 border border-[#FF3C38]/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#FF3C38]/20">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Price Range
            </h3>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-3 bg-[#FF3C38]/20 rounded-lg appearance-none cursor-pointer accent-[#FF3C38]"
            />
            <div className="flex justify-between mt-6 text-lg font-medium">
              <span className="bg-black/50 px-6 py-3 rounded-xl text-white border border-[#FF3C38]/20">
                ${priceRange[0]}
              </span>
              <span className="bg-black/50 px-6 py-3 rounded-xl text-white border border-[#FF3C38]/20">
                ${priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Add debug count */}
          <p className="text-white mb-4">Showing {filteredProducts.length} products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}