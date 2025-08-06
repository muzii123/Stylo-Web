"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { User, Mail, Phone, MapPin } from "lucide-react"

const UserProfile = () => {
  // Placeholder user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+92 300 1234567",
    address: "123 Fashion Street, Lahore, Pakistan",
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">My Profile</h1>
          <p className="text-lg text-gray-600 mb-8">Manage your personal information and orders.</p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-stylo-pink/10 flex items-center justify-center">
                <User size={48} className="text-stylo-pink" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{userData.name}</h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-600" />
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {userData.email}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-600" />
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {userData.phone}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-600 mt-1" />
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> {userData.address}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-stylo-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-md">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default UserProfile
