import ProductCard from '../shop/ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Professional Electric Guitar',
      price: 799.99,
      category: 'guitars',
      image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=500',
    },
    {
      id: 2,
      name: 'Studio Drum Kit',
      price: 1299.99,
      category: 'drums',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500',
    },
    {
      id: 3,
      name: 'Digital Grand Piano',
      price: 2499.99,
      category: 'keyboards',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=500',
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white tracking-wide">
          Featured Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black/80 border border-[#FF3C38]/20 p-4 rounded-xl shadow-lg shadow-[#FF3C38]/5 hover:shadow-[#FF3C38]/20 transition-all duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
