import { Coffee, Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react"

function Footer() {
  return (
    <div className="bg-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <a href="" className="flex items-center gap-2 text-xl font-bold text-white">
              <Coffee className="text-teal-600" size={32}/>
              <span>Bo's coffee</span>
            </a>
            <p className="text-gray-300 text-sm max-w-xs">
              Brewing excellence since day one. Your perfect cup awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
            <a href="" className="text-gray-300 hover:text-teal-500 transition text-sm">Home</a>
            <a href="" className="text-gray-300 hover:text-teal-500 transition text-sm">About Us</a>
            <a href="" className="text-gray-300 hover:text-teal-500 transition text-sm">Create your Plan</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-lg mb-2">Get in Touch</h3>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} className="text-teal-600" />
              <span>123 Coffee Street, Kigali</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Phone size={16} className="text-teal-600" />
              <span>+250 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Mail size={16} className="text-teal-600" />
              <span>hello@boscoffee.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock size={16} className="text-teal-600" />
              <span>Mon-Sun: 7AM - 10PM</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-lg mb-2">Newsletter</h3>
            <p className="text-gray-300 text-sm max-w-xs">
              Subscribe for exclusive offers and updates!
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-600 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <button className="px-4 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Bo's Coffee. All rights reserved.
            </p> 
            {/* Privacy Links */}
            <div className="flex justify-center gap-4 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-teal-500 transition">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-teal-500 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer