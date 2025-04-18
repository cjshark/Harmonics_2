import { motion } from 'framer-motion';

export default function Blog() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Guitar: A Beginner's Guide",
      excerpt: "Everything you need to know about choosing your first guitar and starting your musical journey.",
      author: "John Smith",
      date: "2023-11-15",
      image: "/blog/guitar-guide.jpg",
      category: "Guides"
    },
    {
      id: 2,
      title: "Top 10 Drum Sets for Professional Musicians",
      excerpt: "A comprehensive review of the best drum sets available for professional drummers.",
      author: "Mike Johnson",
      date: "2023-11-10",
      image: "/blog/drum-sets.jpg",
      category: "Reviews"
    },
    {
      id: 3,
      title: "Understanding Music Theory Basics",
      excerpt: "Learn the fundamental concepts of music theory to enhance your playing skills.",
      author: "Sarah Williams",
      date: "2023-11-05",
      image: "/blog/music-theory.jpg",
      category: "Education"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        {...fadeInUp}
        className="text-5xl font-bold text-center mb-12 text-white bg-gradient-to-r from-[#FF3C38] to-[#FF8C42] bg-clip-text text-transparent"
      >
        Latest from Our Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <motion.article
            key={post.id}
            {...fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-black/80 rounded-2xl overflow-hidden border-2 border-[#FF3C38]/20 hover:border-[#FF3C38]/50 transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <span className="text-sm text-[#FF3C38] font-semibold bg-[#FF3C38]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-[#FF3C38] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="bg-[#FF3C38] text-white px-8 py-4 rounded-xl hover:bg-[#FF3C38]/80 transform hover:scale-105 transition-all duration-300 font-semibold">
          Load More Posts
        </button>
      </motion.div>
    </div>
  );
}