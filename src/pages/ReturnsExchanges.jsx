"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ReturnsExchanges = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Returns & Exchanges</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our policy on returning or exchanging products purchased from Stylo.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return Policy</h2>
            <p className="mb-4">
              We accept returns and exchanges within 15 days of purchase, provided the item is unused, in its original
              packaging, and with all tags intact.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Return/Exchange</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>Contact our customer service team to initiate a return/exchange request.</li>
              <li>Pack the item securely with the original invoice.</li>
              <li>Ship the item back to our designated return address.</li>
              <li>Once received and inspected, your refund or exchange will be processed.</li>
            </ol>
            <p>
              Please note that some items, such as fragrances and intimate apparel, may not be eligible for return or
              exchange due to hygiene reasons.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ReturnsExchanges
