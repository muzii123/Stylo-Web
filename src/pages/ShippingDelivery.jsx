"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ShippingDelivery = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Shipping & Delivery</h1>
          <p className="text-lg text-gray-600 mb-8">
            Information regarding our shipping methods, delivery times, and charges.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Information</h2>
            <p className="mb-4">
              We strive to deliver your orders as quickly as possible. Standard delivery usually takes 3-5 business
              days. Express delivery options are available for selected areas.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shipping Charges</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Standard Shipping: PKR 200 (Free on orders above PKR 5,000)</li>
              <li>Express Shipping: PKR 500</li>
            </ul>
            <p>
              Please note that delivery times may vary during peak seasons or due to unforeseen circumstances. You will
              receive a tracking number via email once your order is dispatched.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ShippingDelivery
