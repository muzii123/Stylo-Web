"use client"

import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

 const featuredProducts = [
  {
    id: 1,
    name: "Stylish Heels",
    category: "SHOES",
    price: "PKR 3,500",
    originalPrice: "PKR 4,500",
    discount: "22% OFF",
    image: "/images/Shoes-Heel.jpg", 
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Designer Handbag",
    category: "BAGS",
    price: "PKR 2,800",
    originalPrice: "PKR 3,200",
    discount: "12% OFF",
    image: "/images/handbags.jpg",
    isNew: false,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    category: "SHOES",
    price: "PKR 2,200",
    originalPrice: "PKR 2,800",
    discount: "21% OFF",
    image: "/images/Sneakers.jpg",
    isNew: true,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Summer Dress",
    category: "APPAREL",
    price: "PKR 1,800",
    originalPrice: "PKR 2,500",
    discount: "28% OFF",
    image: "/images/Summer-Dress.jpg",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Premium Perfume",
    category: "FRAGRANCES",
    price: "PKR 4,200",
    originalPrice: "PKR 5,000",
    discount: "16% OFF",
    image: "/images/Perfumes.jpg",
    isNew: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Fashion Watch",
    category: "ACCESSORIES",
    price: "PKR 3,800",
    originalPrice: "PKR 4,800",
    discount: "20% OFF",
    image: "/images/Watches.jpg",
    isNew: false,
    rating: 4.4,
  },
]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg">Discover our handpicked collection</p>
          <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
                  <span className="bg-stylo-pink text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                </div>

                {/* <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="bg-stylo-pink text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div> */}
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-stylo-pink transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-stylo-pink">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-stylo-pink hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts