"use client"
import { Link } from "react-router-dom"

const Categories = () => {
  // Categories data based on stylo.pk
  const categories = [
    {
      id: 7,
      name: "SHOES",
      image: "/images/classic-shoes.jpg",
      itemCount: "200+ Items",
      description: "Heels, Flats, Sneakers",
      bgColor: "from-pink-400 to-pink-600",
      slug: "shoes", // Changed from productId to slug
    },
    {
      id: 8,
      name: "APPAREL",
      image: "/images/Apparel.jpg",
      itemCount: "500+ Items",
      description: "Dresses, Tops, Bottoms",
      bgColor: "from-purple-400 to-purple-600",
      slug: "apparel", // Changed from productId to slug
    },
    {
      id: 9,
      name: "BAGS",
      image: "/images/Bags-Cluches.jpg",
      itemCount: "150+ Items",
      description: "Handbags, Clutches, Totes",
      bgColor: "from-blue-400 to-blue-600",
      slug: "bags", // Changed from productId to slug
    },
    {
      id: 10,
      name: "ACCESSORIES",
      image: "/images/Accessories.jpg",
      itemCount: "300+ Items",
      description: "Jewelry, Belts, Scarves",
      bgColor: "from-green-400 to-green-600",
      slug: "accessories", // Changed from productId to slug
    },
    {
      id: 11,
      name: "FRAGRANCES",
      image: "/images/Fragrance.jpg",
      itemCount: "50+ Items",
      description: "Perfumes, Body Sprays",
      bgColor: "from-yellow-400 to-yellow-600",
      slug: "fragrances", // Changed from productId to slug
    },
    {
      id: 12,
      name: "KIDS",
      image: "/images/Kids-Cloths.jpg",
      itemCount: "100+ Items",
      description: "Boys & Girls Fashion",
      bgColor: "from-red-400 to-red-600",
      slug: "kids", 
    },
  ]

  return (
    <section  categories-section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our wide range of fashion categories designed for every style and occasion
          </p>
          <div className="w-24 h-1 bg-stylo-pink mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link // Use Link component here
              key={category.id}
              to={`/category/${category.slug}`} // Link to dynamic category page
              className="group cursor-pointer bg-white hover:text-stylo-pink rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
            >
              {/* Category Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-white text-black-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-stylo-pink hover:text-pink-600 transition-colors duration-300 mb-2">
                    See More
                  </button>
                  <p className="text-white text-xs font-semibold">{category.itemCount}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-gray-800">{category.name}</span>
                </div>
              </div>

              {/* Category Info */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-stylo-pink transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs text-stylo-pink font-semibold bg-pink-50 px-2 py-1 rounded-full">
                    {category.itemCount}
                  </span>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="h-1 bg-gradient-to-r from-stylo-pink to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="group relative bg-transparent border-2 border-stylo-pink text-stylo-pink px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-stylo-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 group-hover:text-pink-600 hover:border-stylo-pink transition-colors duration-300">
              View All Categories
            </span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-stylo-pink mb-2 group-hover:scale-110 transition-transform duration-300">
              1000+
            </div>
            <p className="text-gray-600 font-medium">Products</p>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-stylo-pink mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <p className="text-gray-600 font-medium">Brands</p>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-stylo-pink mb-2 group-hover:scale-110 transition-transform duration-300">
              10K+
            </div>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-stylo-pink mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <p className="text-gray-600 font-medium">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
