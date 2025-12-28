import { Coffee,X, Menu } from 'lucide-react'
import { useState } from 'react';
import { Link } from "react-router-dom";
function Header() {
  const[isOpen,setIsOpen]=useState(false);

  return (
    <div className="bg-cream py-6">
    <div className="max-w-7xl mx-auto px-6 flex 
    justify-between items-center">
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-700">
    <Coffee className="text-teal-500" size={32}/>
     <span>Bo's coffee</span>
    </Link>
    <nav className="hidden md:flex gap-8">
    <Link to="/"className="text-sm font-bold text-gray-500 hover:text-gray-600 uppercase">Home</Link>
    <Link to="/aboutpage" className="text-sm font-bold text-gray-500 hover:text-gray-600 uppercase">
    About Us
    </Link>
    
    <Link to="/createplan" className="text-sm font-bold text-gray-500 hover:text-gray-600 uppercase">Create your Plan</Link>
    </nav>
    <button className="md:hidden text-gray-700" onClick={()=>setIsOpen(!isOpen)}>
    {isOpen ?<X size={28}/> :<Menu size={28} /> }
    </button>
    </div>
    {isOpen && (
    <div className="md:hidden bg-gray-200 px-6 pt-6 pb-6
    flex flex-col gap-4">
    <Link to="/" className="text-sm font-bold text-gray-700 hover:text-gray-900 uppercase">Home</Link>
    <Link to="/aboutpage" className="text-sm font-bold text-gray-700 hover:text-gray-900 uppercase">About</Link>
    <Link to="/createplan" className="text-sm font-bold text-gray-700 hover:text-gray-900 uppercase">Create a Plan</Link>
    </div> 
    )} 
    </div>
  )
}

export default Header 
