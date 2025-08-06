"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const OurStory = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the journey of Stylo, from humble beginnings to a leading fashion brand.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left leading-relaxed text-gray-700">
            <p className="mb-4">
              Stylo was founded in [Year] with a vision to bring high-quality, fashionable, and affordable footwear and
              apparel to every home. What started as a small boutique has grown into a beloved brand, known for its
              commitment to style, comfort, and customer satisfaction.
            </p>
            <p className="mb-4">
              Our journey has been driven by a passion for fashion and a deep understanding of our customers' needs. We
              believe that everyone deserves to look and feel their best, and our collections are designed to empower
              individuals with confidence and elegance.
            </p>
            <p className="mb-4">
              Over the years, Stylo has expanded its offerings to include a wide range of products, from trendy shoes
              and stylish apparel to chic bags and exquisite accessories. We continuously strive to innovate and bring
              the latest global fashion trends to your doorstep.
            </p>
            <p>
              Thank you for being a part of the Stylo family. We look forward to continuing our journey with you,
              providing exceptional fashion and an unparalleled shopping experience.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default OurStory
