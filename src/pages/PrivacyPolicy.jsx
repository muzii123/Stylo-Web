"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, place an order,
              sign up for our newsletter, or contact customer support. This may include your name, email address,
              shipping address, phone number, and payment information.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to process your orders, provide customer service, send you marketing
              communications (if you opt-in), improve our website and services, and comply with legal obligations.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement a variety of security measures to maintain the safety of your personal information when you
              place an order or enter, submit, or access your personal information.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information
              unless we provide you with advance notice. This does not include website hosting partners and other
              parties who assist us in operating our website, conducting our business, or servicing you, so long as
              those parties agree to keep this information confidential.
            </p>
            <p>By using our site, you consent to our privacy policy. This policy was last modified on July 30, 2025.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
