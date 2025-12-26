import { Coffee, Menu } from 'lucide-react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-cream py-6">
    <div className="max-w-7xl mx-auto px-6 flex 
    justify-between items-center">
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-700">
    <Coffee className="text-teal-500" size={32}/>
     <span>Bo's coffee</span>
    </Link>
    <nav className="hidden md:flex gap-8">
    <Link to="/"className="text-sm font-bold text-gray-700 hover:text-gray-900">Home</Link>
    <Link to="/aboutpage" className="text-sm font-bold text-gray-700 hover:text-gray-900">
    About Us
    </Link>
    
    <Link to="/createplan" className="text-sm font-bold text-gray-700 hover:text-gray-900">Create your Plan</Link>
    </nav>
    <button className="md:hidden text-gray-700">
    <Menu size={23}/>
    </button>
    </div>
    {/* Mobile Menu */} 
    {/* conditional rendering */}
    {/* <div className="md:hidden bg-gray-200 px-6 pt-6 pb-6
    flex flex-col gap-4">
    <a href="" className="text-sm font-bold text-gray-700 hover:text-gray-900">Home</a>
    <a href="" className="text-sm font-bold text-gray-700 hover:text-gray-900">About</a>
    <a href="" className="text-sm font-bold text-gray-700 hover:text-gray-900">Create a Plan</a>
    </div> */}
    </div>
  )
}

export default Header 
