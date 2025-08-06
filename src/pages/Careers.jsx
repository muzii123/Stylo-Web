"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Careers = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Careers at Stylo</h1>
          <p className="text-lg text-gray-600 mb-8">
            Join our passionate team and grow your career in the fashion industry.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
            <p className="mb-4">
              At Stylo, we believe in fostering a creative, inclusive, and dynamic work environment. We offer
              opportunities for growth, competitive benefits, and a chance to be part of a brand that shapes fashion
              trends.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Openings</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Fashion Designer (Lahore)</li>
              <li>Marketing Executive (Karachi)</li>
              <li>Retail Store Manager (Islamabad)</li>
              <li>E-commerce Specialist (Remote)</li>
            </ul>
            <p>
              If you are passionate about fashion and looking for a challenging yet rewarding career, we encourage you
              to apply! Send your resume and cover letter to{" "}
              <a href="mailto:careers@stylo.pk" className="text-stylo-pink hover:underline">
                careers@stylo.pk
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Careers
