"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
import { allProductsData } from "../data/products" 

const OnlineExclusivePage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [exclusiveProducts, setExclusiveProducts] = useState([])

  useEffect(() => {
    const filtered = allProductsData.filter(
      (product) =>
        product.category === "ONLINE EXCLUSIVE" ||
        product.id === "51" ||
        product.id === "52" ||
        product.id === "53" ||
        product.id === "54",
    )
    setExclusiveProducts(filtered)
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Online Exclusive</h1>
            <p className="text-lg text-gray-600">Shop unique items available only on our website.</p>
            <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {exclusiveProducts.map((product) => (
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
                  {/* <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      type="button"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors"
                    >
                      <Heart size={18} />
                    </button>
                    <button
                      type="button"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      type="button"
                      className="bg-stylo-pink text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
                    >
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
                  <span className="font-bold text-stylo-pink">PKR {product.price.toLocaleString()}</span>
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

export default OnlineExclusivePage
