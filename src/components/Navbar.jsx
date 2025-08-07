"use client"

import { useState, useEffect } from "react"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
// import PromoBar from "./promoBar"
import SearchBar from "./SearchBar"
import { NavLink, useLocation, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const { totalItemsInCart, toggleCartSidebar } = useCart() 

  console.log("Navbar: totalItemsInCart is", totalItemsInCart)

  const navigationItems = [
    { name: "HOME", to: "/" },
    { name: "NEW IN", to: "/new-arrivals" },
    { name: "SHOES", to: "/category/shoes" },
    { name: "APPAREL", to: "/category/apparel" },
    { name: "BAGS", to: "/category/bags" },
    { name: "KIDS", to: "/category/kids" },
    { name: "ACCESSORIES", to: "/category/accessories" },
    { name: "FRAGRANCES", to: "/category/fragrances" },
    { name: "ONLINE EXCLUSIVE", to: "/online-exclusive" },
    { name: "SALE", to: "/sale" },
  ]

  const getActiveItem = (path) => {
    if (path === "/") return "HOME"
    if (path.startsWith("/category/")) {
      const category = path.split("/")[2]
      const foundItem = navigationItems.find((item) => item.to.endsWith(category))
      return foundItem ? foundItem.name : ""
    }
    const foundItem = navigationItems.find((item) => item.to !== "/" && path.startsWith(item.to))
    return foundItem ? foundItem.name : "HOME"
  }

  const [activeItem, setActiveItem] = useState(getActiveItem(location.pathname))

  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname))
  }, [location.pathname])

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Promo Bar
      <PromoBar /> */}
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          {" "}
          {/* Changed h-16 to min-h-16 */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setActiveItem("HOME")}>
              <h1 className="text-2xl font-bold text-stylo-pink">STYLO</h1>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {" "}
              {/* Changed space-x-8 to space-x-4 */}
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 group whitespace-nowrap ` +
                    (isActive ? "text-stylo-pink" : "text-gray-700 hover:text-stylo-pink")
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          borderBottom: "2px solid var(--primary-color, #e91e63)",
                          color: "var(--primary-color, #e91e63)",
                        }
                      : {}
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-stylo-pink transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-stylo-pink transition-colors"
              aria-label="User profile"
            >
              <User size={20} />
            </Link>
            <button
              onClick={() => toggleCartSidebar(true)} // Cart icon click par sidebar open karein
              className="text-gray-700 hover:text-stylo-pink transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {/* Ensure totalItemsInCart is directly inside the span */}
              {totalItemsInCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-stylo-pink text-white text-xs rounded-full h-6 w-6 flex items-center justify-center z-20">
                  {totalItemsInCart}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-stylo-pink"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium relative ` +
                    (isActive ? "text-stylo-pink" : "text-gray-700 hover:text-stylo-pink")
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          borderBottom: "2px solid var(--primary-color, #e91e63)",
                          color: "var(--primary-color, #e91e63)",
                        }
                      : {}
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Search Bar Modal */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}

export default Navbar
