"use client"

import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Star, ShoppingCart, MinusCircle, PlusCircle } from "lucide-react"
import { useState } from "react"
import { allProductsData } from "../data/products"
import { useCart } from "../context/CartContext"
// import Toast from "../components/Toast" // Toast ab yahan use nahi hoga

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = allProductsData.find((p) => p.id === id)
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart, toggleCartSidebar } = useCart()
  const navigate = useNavigate()

  if (!product) {
    return (
      <div>
        <Navbar />
        <main className="min-h-[60vh] py-16 bg-gray-50 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Product Not Found</h1>
          <p className="text-lg text-gray-600">The product you are looking for does not exist.</p>
        </main>
        <Footer />
      </div>
    )
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    addItemToCart(product, quantity)
    toggleCartSidebar(true) 
  }

  const handleOrderNow = () => {
    // Directly navigate to checkout, passing the product and quantity in state
    navigate("/checkout", { state: { directProduct: { ...product, quantity } } })
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>

              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke={i < Math.floor(product.rating) ? "currentColor" : "gray"}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">
                  ({product.rating} / 5.0) - {product.reviews} Reviews
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-stylo-pink">PKR {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-stylo-pink text-white text-sm px-3 py-1 rounded-full font-semibold">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Product Details List */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Details:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-800">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <MinusCircle size={20} />
                  </button>
                  <span className="px-4 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-stylo-pink bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleOrderNow}
                  className="flex-1 bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* Toast component ab yahan render nahi hoga */}
    </div>
  )
}
export default ProductDetailPage
