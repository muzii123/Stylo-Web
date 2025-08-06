"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Trash2, MinusCircle, PlusCircle } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartPage = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart, calculateCartTotal } = useCart()

  const updateQuantity = (id, delta) => {
    const currentItem = cartItems.find((item) => item.id === id)
    if (currentItem) {
      updateItemQuantity(id, currentItem.quantity + delta)
    }
  }

  const removeItem = (id) => {
    removeItemFromCart(id)
  }

  const subtotal = calculateCartTotal()
  const shipping = 200 // Example shipping cost
  const total = subtotal + shipping

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white p-10 rounded-lg shadow-lg text-center text-gray-600">
              <p className="text-xl font-semibold mb-4">Your cart is empty.</p>
              <p className="pb-5">Start shopping to add items to your cart!</p>
              <Link
                to="/"
                className="mt-6 bg-stylo-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Items ({cartItems.length})</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border-b border-gray-200 pb-4 last:border-b-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg mr-4 flex-shrink-0"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">PKR {item.price.toLocaleString()}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-gray-600 hover:text-stylo-pink rounded-full"
                            aria-label="Decrease quantity"
                          >
                            <MinusCircle size={20} />
                          </button>
                          <span className="mx-3 text-lg font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-gray-600 hover:text-stylo-pink rounded-full"
                            aria-label="Increase quantity"
                          >
                            <PlusCircle size={20} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-4 p-2 rounded-full"
                        aria-label="Remove item"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>PKR {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl border-t border-gray-200 pt-4 mt-4">
                    <span>Total:</span>
                    <span>PKR {total.toLocaleString()}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="w-full block text-center bg-stylo-pink bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md mt-8"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CartPage
