"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const KidsPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const kidsProducts = [
   {
    id: "37",
    name: "Kids' Fun Sneakers",
    category: "Shoes",
    price: "PKR 1,500",
    image: "/images/kids-Cartoon-Sneakers.jpg",
    rating: 4.6,
  },
  {
    id: "38",
    name: "Girls' Princess Dress",
    category: "Apparel",
    price: "PKR 2,200",
    image: "images/Girls-Princess-Dress.jpg",
    rating: 4.8,
  },
  {
    id: "39",
    name: "Boys' Casual Shirt",
    category: "Apparel",
    price: "PKR 1,200",
    image: "images/Boys-Casual-Shirt.jpg",
    rating: 4.5,
  },
  {
    id: "40",
    name: "Kids' Backpack",
    category: "Bags",
    price: "PKR 1,000",
    image: "images/Kids-Backpack.jpg",
    rating: 4.4,
  },
  ]

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Kids Collection</h1>
            <p className="text-lg text-gray-600">Stylish and comfortable fashion for your little ones.</p>
            <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kidsProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button type="button" className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                      <Heart size={18} />
                    </button>
                    <button type="button" className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                      <Eye size={18} />
                    </button>
                    <button type="button" className="bg-stylo-pink text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
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

export default KidsPage
