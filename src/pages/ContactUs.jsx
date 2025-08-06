"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">Have questions or need assistance? Reach out to us!</p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Email:</span> info@stylo.pk
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Phone:</span> +92 123 456789
            </p>
            <p className="mb-4 text-gray-700">
              <span className="font-medium">Address:</span> 123 Fashion Street, Lahore, Pakistan
            </p>
            <p className="text-gray-600">Our customer service team is available Monday to Friday, 9 AM to 5 PM.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs
