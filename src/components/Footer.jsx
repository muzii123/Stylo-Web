"use client"

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  const footerLinks = [
    {
      title: "CUSTOMER CARE",
      links: [
        { name: "Home", to: "/" },
        { name: "Contact Us", to: "/contact-us" },
        { name: "FAQs", to: "/faqs" },
        { name: "Shipping & Delivery", to: "/shipping-delivery" },
        { name: "Returns & Exchanges", to: "/returns-exchanges" },
        { name: "Order Tracking", to: "/order-tracking" },
      ],
    },
    {
      title: "ABOUT STYLO",
      links: [
        { name: "Our Story", to: "/our-story" },
        { name: "Careers", to: "/careers" },
        { name: "Store Locator", to: "/store-locator" },
        { name: "Blog", to: "/blog" },
        { name: "Privacy Policy", to: "/privacy-policy" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { name: "New Arrivals", to: "/new-arrivals" },
        { name: "Shoes", to: "/shoes" },
        { name: "Apparel", to: "/apparel" },
        { name: "Bags", to: "/bags" },
        { name: "Accessories", to: "/accessories" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stylo-pink mb-4">stylo</h2>
            <p className="text-sm leading-relaxed">
              Your ultimate destination for the latest fashion trends in shoes, apparel, and accessories.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.to ? (
                      <Link to={link.to} className="text-sm hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm hover:text-white transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-stylo-pink" />
                <a href="mailto:info@stylo.pk" className="text-sm hover:text-white transition-colors">
                  info@stylo.pk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-stylo-pink" />
                <a href="tel:+92123456789" className="text-sm hover:text-white transition-colors">
                  +92 123 456789
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-stylo-pink mt-1" />
                <span className="text-sm">
                  123 Fashion Street, <br />
                  Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stylo. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Muzamil</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
