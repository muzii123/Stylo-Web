"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-stylo-pink transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  )
}

const FAQs = () => {
  const faqsData = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by visiting our 'Order Tracking' page and entering your order number and email address.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 15-day return policy for most items. Please refer to our 'Returns & Exchanges' page for detailed information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we only offer shipping within Pakistan. We are working to expand our delivery services internationally soon.",
    },
    {
      question: "How do I change or cancel my order?",
      answer:
        "Once an order is placed, it cannot be changed or canceled directly. Please contact our customer care team immediately for assistance.",
    },
  ]

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about our products and services.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            {faqsData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQs
