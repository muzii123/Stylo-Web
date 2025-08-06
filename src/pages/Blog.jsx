"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Calendar, User } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Summer Fashion Trends for 2025",
      date: "July 25, 2025",
      author: "Stylo Team",
      excerpt:
        "Discover the hottest trends that will dominate your wardrobe this summer, from vibrant colors to breezy fabrics.",
      image: "/placeholder.svg?height=200&width=300&text=Summer+Trends",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Pair of Heels",
      date: "July 18, 2025",
      author: "Fashion Expert",
      excerpt:
        "A comprehensive guide to selecting heels that are not only stylish but also comfortable for any occasion.",
      image: "/placeholder.svg?height=200&width=300&text=Perfect+Heels",
    },
    {
      id: 3,
      title: "Accessorize Like a Pro: Tips and Tricks",
      date: "July 10, 2025",
      author: "Stylo Stylist",
      excerpt: "Elevate your outfits with the right accessories. Learn how to mix and match for a polished look.",
      image: "/placeholder.svg?height=200&width=300&text=Accessories+Tips",
    },
  ]

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Stylo Blog</h1>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest fashion news, styling tips, and exclusive insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-left">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-1" /> {post.date}
                    <User size={16} className="ml-4 mr-1" /> {post.author}
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-stylo-pink hover:underline font-medium">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Blog

