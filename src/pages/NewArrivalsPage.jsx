"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const newArrivals = [
  {
    id: "13",
    name: "Elegant Summer Sandals",
    category: "SHOES",
    price: 4000,
    image: "/images/Elegant-Stilettos.jpg",
    rating: 4.7,
  },
  {
    id: "14",
    name: "Floral Print Maxi Dress",
    category: "APPAREL",
    price: 3200,
    image: "/images/Floral-Print-Maxi-Dress.jpg",
    rating: 4.6,
  },
  {
    id: "15",
    name: "Leather Crossbody Bag",
    category: "BAGS",
    price: 5500,
    image: "/images/Leather-Crossbody-Bag.jpg",
    rating: 4.8,
  },
  {
    id: "16",
    name: "Kids' Cartoon Sneakers",
    category: "KIDS",
    price: 1800,
    image: "/images/Kids-Cartoon-Sneakers.jpg",
    rating: 4.5,
  },
  {
    id: "17",
    name: "Minimalist Silver Necklace",
    category: "ACCESSORIES",
    price: 1200,
    image: "/images/Silver-Necklace.jpg",
    rating: 4.4,
  },
  {
    id: "18",
    name: "Fresh Citrus Fragrance",
    category: "FRAGRANCES",
    price: 6000,
    image: "/images/Fragrance.jpg",
    rating: 4.9,
  },
]

const NewArrivalsPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div>
      <Navbar />
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">New Arrivals</h1>
            <p className="text-lg text-gray-600 pb-10">Grab the best deals before they're gone!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArrivals.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-stylo-pink transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stylo-pink">PKR {product.price}</span>
                </div>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                      ★
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
export default NewArrivalsPage