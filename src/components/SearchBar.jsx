"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Search, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

const SearchBar = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [recentSearches, setRecentSearches] = useState([])
  const searchRef = useRef(null)
  const navigate = useNavigate()

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches")
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches))
    }
  }, [])

  // Save recent searches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
  }, [recentSearches])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        searchRef.current?.focus()
      }, 100)
      document.body.style.overflow = "hidden"
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = "unset"
      }
    } else {
      document.body.style.overflow = "unset"
      setSearchTerm("") // Clear search term when closing
    }
  }, [isOpen])

  const addSearchTerm = useCallback(
    (term) => {
      const trimmedTerm = term.trim()
      if (trimmedTerm && !recentSearches.includes(trimmedTerm)) {
        setRecentSearches((prevSearches) => {
          const newSearches = [trimmedTerm, ...prevSearches.filter((s) => s !== trimmedTerm)]
          return newSearches.slice(0, 5) // Keep only the last 5 unique searches
        })
      }
    },
    [recentSearches],
  )

  const removeSearchTerm = useCallback((termToRemove) => {
    setRecentSearches((prevSearches) => prevSearches.filter((term) => term !== termToRemove))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchTerm.trim()
    if (term) {
      addSearchTerm(term)
      navigate(`/search?query=${encodeURIComponent(term)}`)
      onClose()
    }
  }

  const handleRecentSearchClick = (term) => {
    setSearchTerm(term)
    addSearchTerm(term) // Add to top of recent searches
    navigate(`/search?query=${encodeURIComponent(term)}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-start justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mt-20 p-8 relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          onClick={onClose}
          aria-label="Close search bar"
        >
          <X size={28} />
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">Search Stylo</h2>
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full border-2 border-stylo-pink rounded-full bg-gray-50 focus-within:ring-2 focus-within:ring-stylo-pink transition-all duration-200 shadow"
        >
          <span className="pl-4 text-stylo-pink flex items-center">
            <Search size={24} />
          </span>
          <input
            ref={searchRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products, categories, etc..."
            className="flex-grow px-4 py-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-stylo-pink bg-black text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-pink-600 transition-colors"
            aria-label="Perform search"
          >
            Search
          </button>
        </form>

        {recentSearches.length > 0 && (
          <div className="w-full mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent Searches:</h3>
            <ul className="space-y-2">
              {recentSearches.map((term, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <span onClick={() => handleRecentSearchClick(term)} className="text-gray-700 text-base flex-grow">
                    {term}
                  </span>
                  <button
                    onClick={() => removeSearchTerm(term)}
                    className="text-gray-500 hover:text-red-500 transition-colors ml-4"
                    aria-label={`Remove ${term} from recent searches`}
                  >
                    <X size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 text-gray-500 text-sm text-center">
          <p>Popular: Shoes, Bags, New Arrivals</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
