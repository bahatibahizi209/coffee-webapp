import { Coffee, Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <div className="bg-gray-700 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center
    gap-8 md:gap-0">
    <div className="flex flex-col md:items-center gap-6 md:gap-16">
      <a href="" className="flex items-center justify-center gap-2 text-xl font-bold text-white">
      <Coffee className="text-teal-600" size={32}/>
       <span>Bo's coffee</span>
      </a>
    </div>
      <div className="flex justify-center md:justify-end gap-6">
          <a href="#" className="text-white hover:text-teal-500 transition">
            <Facebook size={22} />
          </a>
          <a href="#" className="text-white hover:text-teal-500 transition">
            <Instagram size={22} />
          </a>
          <a href="#" className="text-white hover:text-teal-500 transition">
            <Twitter size={22} />
          </a>
        </div>
    </div>
    </div>
  )
}

export default Footer
