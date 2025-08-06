"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      image: "/images/New-Arrivals.jpg", 
      title: "New Arrivals",
      subtitle: "Discover Latest Fashion Collection",
      buttonText: "Shop Now",
      overlay: "bg-black/40",
      linkTo: "/new-arrivals", 
    },
    {
      id: 2,
      image: "/images/Summer-Sale.jpg", 
      title: "Summer Sale",
      subtitle: "Up to 50% Off on Selected Items",
      buttonText: "Explore Sale",
      overlay: "bg-black/30",
      linkTo: "/sale", 
    },
    {
      id: 3,
      image: "/images/Premium-Collection.jpg",
      title: "Online Exclusive",
      subtitle: "Exclusive Designer Pieces",
      buttonText: "View Collection",
      overlay: "bg-black/35",
      linkTo: "/online-exclusive", 
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`w-full h-full ${slide.overlay} flex items-center justify-center`}>
              <div className="text-center text-white px-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">{slide.subtitle}</p>
                <Link 
                  to={slide.linkTo} 
                  className="bg-stylo-pink hover:bg-pink-600 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2 inline-block"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
