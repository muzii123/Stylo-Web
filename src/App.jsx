// "use client"
// import { Routes, Route, useLocation } from "react-router-dom"
// import { useEffect } from "react"
// import Home from "./pages/Home"
// import ContactUs from "./pages/ContactUs"
// import FAQs from "./pages/FAQs"
// import OurStory from "./pages/OurStory"
// import NewArrivalsPage from "./pages/NewArrivalsPage"
// import ShippingDelivery from "./pages/ShippingDelivery"
// import ReturnsExchanges from "./pages/ReturnsExchanges"
// import OrderTracking from "./pages/OrderTracking" 
// import Careers from "./pages/Careers"
// import StoreLocator from "./pages/StoreLocator" 
// import Blog from "./pages/Blog" 
// import PrivacyPolicy from "./pages/PrivacyPolicy"
// import ShoesPage from "./pages/ShoesPage" 
// import ApparelPage from "./pages/ApparelPage" 
// import BagsPage from "./pages/BagsPage" 
// import AccessoriesPage from "./pages/AccessoriesPage" 
// import KidsPage from "./pages/KidsPage"
// import FragrancesPage from "./pages/FragrancesPage" 
// import OnlineExclusivePage from "./pages/OnlineExclusivePage" 
// import SalePage from "./pages/SalePage" 
// import UserProfile from "./pages/UserProfile"
// import CartPage from "./pages/CartPage"
// import ProductDetailPage from "./pages/ProductDetailPage"
// import SearchResultsPage from "./pages/SearchResultsPage"
// import { CartProvider } from "./context/CartContext"
// import "./index.css"

// function App() {
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);
//   return (
//      <CartProvider>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/faqs" element={<FAQs />} />
//       <Route path="/our-story" element={<OurStory />} />
//       <Route path="/new-arrivals" element={<NewArrivalsPage />} />
//       <Route path="/shipping-delivery" element={<ShippingDelivery />} />
//       <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
//       <Route path="/order-tracking" element={<OrderTracking />} />
//       <Route path="/careers" element={<Careers />} />
//       <Route path="/store-locator" element={<StoreLocator />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       <Route path="/shoes" element={<ShoesPage />} />
//       <Route path="/apparel" element={<ApparelPage />} />
//       <Route path="/bags" element={<BagsPage />} />
//       <Route path="/accessories" element={<AccessoriesPage />} />
//       <Route path="/kids" element={<KidsPage />} />
//        <Route path="/fragrances" element={<FragrancesPage />} /> 
//       <Route path="/online-exclusive" element={<OnlineExclusivePage />} /> 
//       <Route path="/sale" element={<SalePage />} />
//         <Route path="/profile" element={<UserProfile />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/product-details" element={<ProductDetailPage />} />
//        <Route path="/product/:id" element={<ProductDetailPage />} />
//        <Route path="/search" element={<SearchResultsPage />} />

//       {/* Add more routes for other pages as needed */}
//     </Routes>
//      </CartProvider>
    
//   )
// }

// export default App



"use client"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { CartProvider } from "./context/CartContext"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import FAQs from "./pages/FAQs"
import OurStory from "./pages/OurStory"
import NewArrivalsPage from "./pages/NewArrivalsPage"
import ShippingDelivery from "./pages/ShippingDelivery"
import ReturnsExchanges from "./pages/ReturnsExchanges"
import OrderTracking from "./pages/OrderTracking"
import Careers from "./pages/Careers"
import StoreLocator from "./pages/StoreLocator"
import Blog from "./pages/Blog"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import CategoryPage from "./pages/CategoryPage"
import UserProfile from "./pages/UserProfile"
import CartPage from "./pages/CartPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import SearchResultsPage from "./pages/SearchResultsPage"
import OnlineExclusivePage from "./pages/OnlineExclusivePage"
import SalePage from "./pages/SalePage"
import CheckoutPage from "./pages/CheckoutPage" 
import CartSidebar from "./components/CartSidebar"
import "./index.css"

function App() {
    const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/online-exclusive" element={<OnlineExclusivePage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
       <CartSidebar />
    </CartProvider>
  )
}

export default App


