"use client"

import { X, Trash2, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartSidebar = () => {
  const {
    cartItems,
    updateItemQuantity,
    removeItemFromCart,
    calculateCartTotal,
    isCartSidebarOpen,
    toggleCartSidebar,
  } = useCart()

  const subtotal = calculateCartTotal()
  const shipping = 200 // Example shipping cost
  const total = subtotal + shipping

  const handleUpdateQuantity = (id, delta) => {
    const currentItem = cartItems.find((item) => item.id === id)
    if (currentItem) {
      updateItemQuantity(id, currentItem.quantity + delta)
    }
  }

  const handleRemoveItem = (id) => {
    removeItemFromCart(id)
  }

  return (
    <>
      {/* Overlay */}
      {isCartSidebarOpen && (
        <div className="fixed inset-0 bg-transparent z-40" onClick={() => toggleCartSidebar(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isCartSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={() => toggleCartSidebar(false)}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-6 text-center text-gray-600">
            <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-semibold mb-2">Your cart is empty.</p>
            <p className="text-sm">Add some amazing products to get started!</p>
            <Link
              to="/"
              onClick={() => toggleCartSidebar(false)}
              className="mt-6 inline-block bg-stylo-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100%-140px)]">
            {" "}
            {/* Adjust height based on header/footer */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-100 pb-4 last:border-b-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">PKR {item.price.toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="p-1 text-gray-600 hover:text-stylo-pink rounded-full"
                        aria-label="Decrease quantity"
                      >
                        <MinusCircle size={18} />
                      </button>
                      <span className="mx-2 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="p-1 text-gray-600 hover:text-stylo-pink rounded-full"
                        aria-label="Increase quantity"
                      >
                        <PlusCircle size={18} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4 p-1 rounded-full"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal:</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-4">
                <span>Shipping:</span>
                <span>PKR {shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-gray-800 border-t border-gray-200 pt-4">
                <span>Total:</span>
                <span>PKR {total.toLocaleString()}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => toggleCartSidebar(false)}
                className="w-full block text-center bg-stylo-pink bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md mt-6"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/cart"
                onClick={() => toggleCartSidebar(false)}
                className="w-full block text-center text-stylo-pink border border-stylo-pink px-6 py-3 rounded-full font-semibold hover:bg-stylo-pink hover:text-black transition-colors duration-300 shadow-md mt-3"
              >
                View Full Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartSidebar
