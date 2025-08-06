"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
