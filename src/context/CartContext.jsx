"use client"

import { createContext, useState, useEffect, useContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("styloCartItems")
      console.log("Initial load from localStorage:", storedCartItems ? JSON.parse(storedCartItems) : "No items")
      return storedCartItems ? JSON.parse(storedCartItems) : []
    }
    return []
  })

  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false) // New state for sidebar visibility

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("styloCartItems", JSON.stringify(cartItems))
      console.log("Cart items saved to localStorage. Current state:", cartItems)
    }
  }, [cartItems])

  const addItemToCart = (product, quantity = 1) => {
    console.log("addItemToCart called. Product:", product, "Quantity:", quantity)
    setCartItems((prevItems) => {
      console.log("Inside setCartItems callback. Previous items:", prevItems)
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingItemIndex > -1) {
        // Create a new array with the updated item, ensuring immutability
        const updatedItems = prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity } // Create a new object for the updated item
            : item,
        )
        console.log("Existing item found, updating quantity. New cartItems (inside callback):", updatedItems)
        return updatedItems
      } else {
        const newCartItems = [...prevItems, { ...product, quantity }]
        console.log("New item added to cart. New cartItems (inside callback):", newCartItems)
        return newCartItems
      }
    })
  }

  const updateItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
        .filter((item) => item.quantity > 0)
    })
  }

  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0)
  console.log("Total items in cart (re-calculated for Navbar):", totalItemsInCart)

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const toggleCartSidebar = (open) => {
    setIsCartSidebarOpen(open)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        clearCart,
        totalItemsInCart,
        calculateCartTotal,
        isCartSidebarOpen, // New value
        toggleCartSidebar, // New value
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
