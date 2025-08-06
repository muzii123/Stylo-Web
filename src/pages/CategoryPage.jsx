"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { allProductsData } from "../data/products"

const CategoryPage = () => {
  const { categoryName } = useParams() 
  const [filteredProducts, setFilteredProducts] = useState([])
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    if (categoryName) {
      const lowerCaseCategoryName = categoryName.toLowerCase()
      const results = allProductsData.filter((product) => product.category.toLowerCase() === lowerCaseCategoryName)
      setFilteredProducts(results)
    } else {
      setFilteredProducts([])
    }
  }, [categoryName])

  // Category name ko display ke liye format karenge (e.g., "shoes" -> "Shoes")
  const formattedCategoryName = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()
    : "Category"

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50" id="category-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{formattedCategoryName} Collection</h1>
            <p className="text-lg text-gray-600">
              {filteredProducts.length > 0
                ? `Explore our latest ${formattedCategoryName} collection.`
                : `No products found in ${formattedCategoryName} category.`}
            </p>
            <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
                      {product.discount && (
                        <span className="bg-stylo-pink text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                      )}
                    </div>

                    {/* <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                        hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-stylo-pink hover:text-white transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="bg-stylo-pink text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div> */}
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-stylo-pink transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stylo-pink">PKR {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          PKR {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 p-8 bg-white rounded-lg shadow-lg">
              <p className="text-xl font-semibold mb-4">No products found in "{formattedCategoryName}" category.</p>
              <p>Try browsing other categories or return to the homepage.</p>
              <Link
                to="/"
                className="mt-6 inline-block bg-stylo-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CategoryPage
