"use client"

import { useState } from "react"
import { X } from "lucide-react"

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="bg-black text-white text-center py-2 px-4 text-sm flex items-center justify-center relative">
      <span>Free Delivery on All Orders Till 31st July Only!</span>
      <button
        className="ml-4 text-white hover:text-gray-300 absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() => setIsVisible(false)}
        aria-label="Close promotion banner"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default PromoBar
