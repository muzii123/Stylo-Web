"use client"

import { useEffect, useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

const Toast = ({ message, type = "success", onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) {
        onClose()
      }
    }, 3000) // Toast will disappear after 3 seconds

    return () => clearTimeout(timer)
  }, [onClose])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"
  const Icon = type === "success" ? CheckCircle : XCircle

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg text-white flex items-center space-x-3 z-50 ${bgColor} animate-fade-in`}
      role="alert"
    >
      <Icon size={24} />
      <span>{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-auto text-white/80 hover:text-white"
        aria-label="Close notification"
      >
        <XCircle size={20} />
      </button>
    </div>
  )
}

export default Toast
