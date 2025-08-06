"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation, Link } from "react-router-dom"
import { allProductsData } from "../data/products"
import { useState, useEffect } from "react"

const SearchResultsPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get("query") || ""
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (searchTerm) {
      const lower = searchTerm.toLowerCase()
      setFilteredProducts(
        allProductsData.filter(
          (p) =>
            p.name.toLowerCase().includes(lower) ||
            p.category.toLowerCase().includes(lower) ||
            (p.description && p.description.toLowerCase().includes(lower)),
        ),
      )
    } else {
      setFilteredProducts([])
    }
  }, [searchTerm])

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Search Results for "{searchTerm}"
          </h1>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <span className="font-bold text-stylo-pink">PKR {product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 p-8 bg-white rounded-lg shadow-lg">
              <p className="text-xl font-semibold mb-4">No results found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SearchResultsPage
