"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import { Link, useNavigate, useLocation } from "react-router-dom" // useLocation import karein
import { Info } from "lucide-react"

const CheckoutPage = () => {
  const { cartItems: contextCartItems, calculateCartTotal: calculateContextCartTotal } = useCart()
  const navigate = useNavigate()
  const location = useLocation() // useLocation hook ka istemal karein

  const [formData, setFormData] = useState({
    email: "",
    receiveOffers: false,
    city: "",
    country: "Pakistan",
    firstName: "",
    lastName: "",
    address: "",
    cityInput: "", // For manual city input if dropdown not used
    postalCode: "",
    phone: "",
    saveInfo: false,
    textOffers: false,
    shippingMethod: "free", // 'free' or 'standard'
    paymentMethod: "payfast", // 'payfast' or 'cod'
  })

  // Determine which items to display: direct product or cart items
  const itemsToDisplay = location.state?.directProduct ? [location.state.directProduct] : contextCartItems

  // Calculate subtotal based on itemsToDisplay
  const subtotal = itemsToDisplay.reduce((total, item) => total + item.price * item.quantity, 0)

  const shippingCost = formData.shippingMethod === "free" ? 0 : 200 // Example: PKR 200 for standard shipping
  const total = subtotal + shippingCost

  useEffect(() => {
    // Redirect to cart if no items in cart and no direct product
    if (itemsToDisplay.length === 0) {
      navigate("/cart")
    }
  }, [itemsToDisplay, navigate])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the order data to your backend
    console.log("Order Submitted:", {
      formData,
      itemsOrdered: itemsToDisplay, // Use itemsToDisplay here
      subtotal,
      shippingCost,
      total,
    })
    alert("Order submitted successfully! (This is a demo submission)")
    // Optionally, clear cart and navigate to an order confirmation page
    // clearCart(); // Agar direct order kiya hai toh cart clear karne ki zaroorat nahi
    // navigate("/order-confirmation");
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-[80vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Checkout Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Checkout</h2>
                <Link to="/cart" className="text-stylo-pink hover:underline text-sm">
                  Return to cart
                </Link>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="receiveOffers"
                        name="receiveOffers"
                        checked={formData.receiveOffers}
                        onChange={handleChange}
                        className="h-4 w-4 text-stylo-pink border-gray-300 rounded focus:ring-stylo-pink"
                      />
                      <label htmlFor="receiveOffers" className="ml-2 text-sm text-gray-700">
                        Email me with news and offers
                      </label>
                    </div>
                  </div>
                </section>

                {/* Delivery Information */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Delivery</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    This will also be used as your billing address for this order.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country/Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      >
                        <option value="Pakistan">Pakistan</option>
                        {/* Add more countries if needed */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        Select city from dropdown
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      >
                        <option value="">Select City</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        {/* Add more cities as needed */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="cityInput" className="block text-sm font-medium text-gray-700 mb-1">
                        City (manual input)
                      </label>
                      <input
                        type="text"
                        id="cityInput"
                        name="cityInput"
                        value={formData.cityInput}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal code (optional)
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-stylo-pink focus:border-stylo-pink"
                      />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="h-4 w-4 text-stylo-pink border-gray-300 rounded focus:ring-stylo-pink"
                      />
                      <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
                        Save this information for next time
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="textOffers"
                        name="textOffers"
                        checked={formData.textOffers}
                        onChange={handleChange}
                        className="h-4 w-4 text-stylo-pink border-gray-300 rounded focus:ring-stylo-pink"
                      />
                      <label htmlFor="textOffers" className="ml-2 text-sm text-gray-700">
                        Text me with news and offers
                      </label>
                    </div>
                  </div>
                </section>

                {/* Shipping Method */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping method</h3>
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    {/* <label className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="free"
                          checked={formData.shippingMethod === "free"}
                          onChange={handleChange}
                          className="h-4 w-4 text-stylo-pink border-gray-300 focus:ring-stylo-pink"
                        />
                        <span className="ml-3 text-base font-medium text-gray-800">Free Shipping on Payfast</span>
                      </div>
                      <span className="text-gray-600">PKR 0.00</span>
                    </label> */}
                    <label className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          checked={formData.shippingMethod === "standard"}
                          onChange={handleChange}
                          className="h-4 w-4 text-stylo-pink border-gray-300 focus:ring-stylo-pink"
                        />
                        <span className="ml-3 text-base font-medium text-gray-800">Standard Shipping</span>
                      </div>
                      <span className="text-gray-600">PKR 200.00</span>
                    </label>
                  </div>
                  <div className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-md mt-4 text-sm">
                    <Info size={16} className="mr-2 flex-shrink-0" />
                    <span>Note: Free Shipping on Payfast</span>
                  </div>
                </section>

                {/* Payment */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Your payment method's billing address must match the shipping address. All transactions are secure
                    and encrypted.
                  </p>
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    {/* <label className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="payfast"
                          checked={formData.paymentMethod === "payfast"}
                          onChange={handleChange}
                          className="h-4 w-4 text-stylo-pink border-gray-300 focus:ring-stylo-pink"
                        />
                        <span className="ml-3 text-base font-medium text-gray-800">PAYFAST (Get Free Shipping)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img src="/placeholder.svg?height=16&width=24&text=Visa" alt="Visa" className="h-4" />
                        <img src="/placeholder.svg?height=16&width=24&text=MC" alt="Mastercard" className="h-4" />
                        Add more payment icons as needed
                      </div>
                    </label> */}
                    {/* <div className="bg-gray-50 p-4 text-sm text-gray-600 border-t border-gray-200">
                      <p>
                        After clicking "Pay now", you will be redirected to PAYFAST (Get Free Shipping) to complete your
                        purchase securely.
                      </p>
                    </div> */}
                    <label className="flex items-center p-4 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleChange}
                        className="h-4 w-4 text-stylo-pink border-gray-300 focus:ring-stylo-pink"
                      />
                      <span className="ml-3 text-base font-medium text-gray-800">Cash on Delivery (COD)</span>
                    </label>
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-stylo-pink bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md text-lg"
                >
                  Pay now
                </button>
              </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-fit sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {itemsToDisplay.length === 0 ? (
                  <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                  itemsToDisplay.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray-800">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-gray-300 pt-6 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span>PKR {shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-gray-200 pt-4 mt-4">
                  <span>Total:</span>
                  <span>PKR {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Discount code or gift card
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="discountCode"
                    name="discountCode"
                    placeholder="Enter code"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-stylo-pink focus:border-stylo-pink"
                  />
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CheckoutPage
