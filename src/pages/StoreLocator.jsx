"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { MapPin } from "lucide-react"

const StoreLocator = () => {
  const stores = [
    {
      id: 1,
      name: "Stylo Flagship Store - Lahore",
      address: "123 Main Boulevard, Gulberg, Lahore",
      phone: "+92 42 1234567",
      mapLink: "https://maps.app.goo.gl/example1",
    },
    {
      id: 2,
      name: "Stylo Emporium - Karachi",
      address: "456 Ocean View Road, Clifton, Karachi",
      phone: "+92 21 9876543",
      mapLink: "https://maps.app.goo.gl/example2",
    },
    {
      id: 3,
      name: "Stylo Grand Mall - Islamabad",
      address: "789 Capital Avenue, F-7 Markaz, Islamabad",
      phone: "+92 51 1122334",
      mapLink: "https://maps.app.goo.gl/example3",
    },
  ]

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Store Locator</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find a Stylo store near you and experience our collections in person.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Store Locations</h2>
            <div className="space-y-6">
              {stores.map((store) => (
                <div key={store.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{store.name}</h3>
                  <p className="flex items-center text-gray-700 mb-1">
                    <MapPin size={18} className="text-stylo-pink mr-2 flex-shrink-0" />
                    {store.address}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Phone:</span> {store.phone}
                  </p>
                  <a
                    href={store.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-stylo-pink hover:underline font-medium"
                  >
                    View on Map
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default StoreLocator
