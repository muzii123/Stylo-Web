"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Search } from "lucide-react"
import { useState } from "react"

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(null)
  const [error, setError] = useState("")

  const handleTrackOrder = (e) => {
    e.preventDefault()
    setError("")
    setTrackingResult(null)

    if (!orderNumber) {
      setError("Please enter your order number.")
      return
    }

    // Simulate API call for order tracking
    setTimeout(() => {
      if (orderNumber === "STYLO12345") {
        setTrackingResult({
          status: "Shipped",
          estimatedDelivery: "August 5, 2025",
          currentLocation: "Lahore Hub",
        })
      } else {
        setError("Order not found. Please check your order number.")
      }
    }, 1500)
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Track Your Order</h1>
          <p className="text-lg text-gray-600 mb-8">
            Enter your order number to get the latest updates on your delivery.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <form onSubmit={handleTrackOrder} className="space-y-4">
              <div>
                <label htmlFor="orderNumber" className="block text-lg font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-stylo-pink transition-all duration-200">
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="e.g., STYLO12345"
                    className="flex-grow px-5 py-3 text-lg text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-stylo-pink text-white px-6 py-3 text-lg hover:bg-pink-600 transition-colors"
                    aria-label="Track order"
                  >
                    <Search size={20} />
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>

            {trackingResult && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
                <p className="mb-2 text-gray-700">
                  <span className="font-medium">Status:</span> {trackingResult.status}
                </p>
                <p className="mb-2 text-gray-700">
                  <span className="font-medium">Estimated Delivery:</span> {trackingResult.estimatedDelivery}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Current Location:</span> {trackingResult.currentLocation}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default OrderTracking
