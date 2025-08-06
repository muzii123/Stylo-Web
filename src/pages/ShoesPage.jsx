"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ShoesPage = () => {
  // const [hoveredProduct, setHoveredProduct] = useState(null)

  const shoesProducts = [
    {
      id: "19",
      name: "Classic Black Pumps",
      category: "Heels",
      price: "PKR 4,500",
      image: "/images/Classic-Black-Pumps.jpg",
      rating: 4.7,
    },
    {
      id: "20",
      name: "Comfortable Flat Sandals",
      category: "Flats",
      price: "PKR 2,500",
      image: "/images/Comfortable-Flat-Sandals.jpg",
      rating: 4.3,
    },
    {
      id: "21",
      name: "Sporty Running Shoes",
      category: "Sneakers",
      price: "PKR 3,800",
      image: "/images/Sporty-Running-Shoes.jpg",
      rating: 4.6,
    },
    {
      id: "22",
      name: "Elegant Stilettos",
      category: "Heels",
      price: "PKR 5,200",
      image: "/images/Elegant-Stilettos.jpg",
      rating: 4.8,
    },
    {
      id: "23",
      name: "Casual Loafers",
      category: "Flats",
      price: "PKR 3,000",
      image: "/images/Casual-Loafers.jpg",
      rating: 4.2,
    },
    {
      id: "24",
      name: "High-Top Sneakers",
      category: "Sneakers",
      price: "PKR 4,000",
      image: "/images/High-Top-Sneakers.jpg",
      rating: 4.5,
    },
  ]

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shoes Collection</h1>
            <p className="text-lg text-gray-600">Step up your style with our diverse range of footwear.</p>
            <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shoesProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
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
                  </div>
                </div> */}

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
                  <span className="font-bold text-stylo-pink">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ShoesPage
