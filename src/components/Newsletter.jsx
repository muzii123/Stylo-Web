"use client"

import { useState } from "react"
import { Mail, CheckCircle, Gift, Bell, Star, ArrowRight, Users, Percent, Calendar } from "lucide-react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Newsletter benefits data
  const benefits = [
    {
      icon: <Gift className="w-6 h-6 text-stylo-pink" />,
      title: "Exclusive Offers",
      description: "Get up to 50% off on special deals only for subscribers.",
      highlight: "Save More",
    },
    {
      icon: <Bell className="w-6 h-6 text-stylo-pink" />,
      title: "New Arrivals",
      description: "Be the first to know about our latest fashion collections.",
      highlight: "Early Access",
    },
    {
      icon: <Star className="w-6 h-6 text-stylo-pink" />,
      title: "Fashion Tips",
      description: "Weekly styling guides and trend updates from experts.",
      highlight: "Style Guide",
    },
  ]

  // Success stats data
  const stats = [
    { icon: <Users className="w-5 h-5 text-stylo-pink" />, number: "50K+", label: "Happy Subscribers" },
    { icon: <Percent className="w-5 h-5 text-stylo-pink" />, number: "30%", label: "Average Savings" },
    { icon: <Calendar className="w-5 h-5 text-stylo-pink" />, number: "Weekly", label: "Fashion Updates" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setError("Please enter your email address")
      return
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
      setError("")
    }, 2000)
  }

  const resetForm = () => {
    setIsSubscribed(false)
    setEmail("")
    setError("")
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubscribed ? (
          <div className="text-center">
            {/* Header Section */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-stylo-pink/10 rounded-full mb-6 shadow-md">
                <Mail className="text-stylo-pink" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Stay Updated with <span className="text-stylo-pink">Latest Trends</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Join thousands of fashion lovers and get exclusive access to deals, new arrivals, and styling tips
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto mb-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stylo-pink text-gray-800 text-lg placeholder-gray-500 shadow-md"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className=" bg-black text-white w-full bg-stylo-pink px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md transform hover:scale-105"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {/* Error Message */}
                {error && (
                  <div className="text-center">
                    <p className="text-red-700 bg-red-100 px-4 py-2 rounded-full text-sm border border-red-300">
                      {error}
                    </p>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="text-gray-500 text-sm">🔒 We respect your privacy. Unsubscribe anytime with one click.</p>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-stylo-pink/10 rounded-full mb-4 shadow-md">
                    {benefit.icon}
                  </div>
                  <div className="inline-block bg-stylo-pink text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {benefit.highlight}
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-gray-800 text-xl font-bold mb-6">Join Our Growing Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-stylo-pink/10 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-stylo-pink mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="text-center text-gray-800 max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-8 border border-green-300/30 shadow-lg">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎉 Welcome to the <span className="text-stylo-pink">Stylo Family!</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Thank you for subscribing! You'll receive our latest updates, exclusive offers, and fashion tips directly
              in your inbox.
            </p>

            {/* Success Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100 shadow-inner">
              <h3 className="text-xl font-bold mb-6">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  { title: "Welcome Email", desc: "Check your inbox for a special 20% off coupon" },
                  { title: "Weekly Updates", desc: "Get the latest trends every Friday morning" },
                  { title: "Exclusive Access", desc: "Early access to sales and new collections" },
                  { title: "Style Tips", desc: "Personal styling advice from fashion experts" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
              >
                Subscribe Another Email
              </button>
              <button className="bg-stylo-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md transform hover:scale-105">
                Continue Shopping →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Newsletter
