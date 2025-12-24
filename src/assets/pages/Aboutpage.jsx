import Header from "../../components/Header"
import heroImage from "../../assets/image/coffee5.jpg"
import aboutImage from "../../assets/image/barista2.jpg"
import QualityImage from "../../assets/image/barista4.jpg"
import HeadquartersImage from "../../assets/image/location.jpg"
import HeadquartersImage2 from "../../assets/image/location2.jpg"
import HeadquartersImage3 from "../../assets/image/location3.jpg"
function Aboutpage() {
  return (
    <div className="">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative rounded-lg overflow-hidden bg-gray-700
        h-[400px] sm:h-[500px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{backgroundImage:`url(${heroImage})`}}/>
        <div className="relative z-10 max-w-2xl sm:ml-16 mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-6xl font-bold text-white mb-6 leading-tight">
        About Us
        </h1>
        <p className="text-white text-sm sm:text-lg leading-relaxed opacity-800">
        Bo's coffee began its journey of exotic discovery in 1999,highlighting stories of coffee from
        around the world.
        we have since been dedicated to bring the perfect cup from bean to brew in every shipment.
        </p>
        </div>
        </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <img src={aboutImage} alt="" className="
        rounded-lg w-50% h-64 sm:h-80 md:h-[400px] object-cover" />
        <div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-">Out Commitment</h2>
        <p className="text-gray-700 opacity-80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
        We're built on simple mission and a Commitment to doing good along the way.we want to make it easy
        for you to discover and brew the world's best coffee at home.
        </p>
        </div>
        </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-8">Uncomprimising quality</h2>
        <p className="text-gray-700 opacity-80 leading-relaxed mb-4 sm:mb-4 text-sm sm:text-base">
        Although we work with growers who pay close attention to all stages of harvest and processing, we employ
        a rigorous quality control program to avoid over-roasting or drying the coffee.
        </p>
        <p className="text-gray-700 opacity-80 leading-relaxed mb-4 sm:mb-4 text-sm sm:text-base">
        Every bag is tagged with a roasting date and batch number. Our goal is consistent, user-friendly coffee
        so brewing is easy and enjoyable. 
        </p>
        </div>
        <img src={QualityImage} alt="" className="rounded-lg w-50% h-64 sm:h-80 md:h-[400px] object-cover"/>
        </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 sm:mb-6">Our Headquarters</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
  <div className="relative group hover:cursor-pointer">
  <div className="relative bg-gradient-to-tr from-[#fefcf7] via-[#f4f1eb] to-[#fefcf7] rounded-3xl overflow-hidden border-2 border-[#f4f1eb] hover:border-[#0e8784] transition-all duration-300">
  <div className="relative overflow-hidden" style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
  <img src={HeadquartersImage} alt="" className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-500" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#333d4d]/60 to-transparent"></div>
  </div>
  <div className="px-6 pb-8 -mt-8 relative">
  <div className="inline-block bg-white rounded-full px-6 py-2 shadow-lg mb-4 border-2 border-[#0e8784]">
  <h3 className="text-xl sm:text-2xl font-bold text-[#0e8784]">United Kingdom</h3>
  </div>  
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md space-y-1 text-left">
        <p className="text-sm sm:text-base text-[#333d4d] font-medium flex items-center">
          <span className="w-2 h-2 bg-[#0e8784] rounded-full mr-3"></span>
          221B Baker Street
        </p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">Marylebone</p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">London</p>
        <p className="text-sm sm:text-base text-[#333d4d] font-semibold pl-5 pt-1">NW1 6XE</p>
       </div>
       </div> 
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#0e8784]/20 to-transparent rounded-tl-full"></div>
        </div>
        </div>
  {/* 2ND PART CITY */}
  <div className="relative group hover:cursor-pointer">
  <div className="relative bg-gradient-to-tr from-[#fefcf7] via-[#f4f1eb] to-[#fefcf7] rounded-3xl overflow-hidden border-2 border-[#f4f1eb] hover:border-[#0e8784] transition-all duration-300">
  <div className="relative overflow-hidden" style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
  <img src={HeadquartersImage2} alt="" className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-500" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#333d4d]/60 to-transparent"></div>
  </div>
  <div className="px-6 pb-8 -mt-8 relative">
  <div className="inline-block bg-white rounded-full px-6 py-2 shadow-lg mb-4 border-2 border-[#0e8784]">
  <h3 className="text-xl sm:text-2xl font-bold text-[#0e8784]">Canada</h3>
  </div>  
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md space-y-1 text-left">
        <p className="text-sm sm:text-base text-[#333d4d] font-medium flex items-center">
          <span className="w-2 h-2 bg-[#0e8784] rounded-full mr-3"></span>
          221B Baker Street
        </p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">Marylebone</p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">Toronto</p>
        <p className="text-sm sm:text-base text-[#333d4d] font-semibold pl-5 pt-1">NW1 6XE</p>
       </div>
       </div> 
    {/* Decorative bottom accent */}
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#0e8784]/20 to-transparent rounded-tl-full"></div>
        </div>
        </div>
  {/* 3RD PART CITY */}
  <div className="relative group hover:cursor-pointer">
  <div className="relative bg-gradient-to-tr from-[#fefcf7] via-[#f4f1eb] to-[#fefcf7] rounded-3xl overflow-hidden border-2 border-[#f4f1eb] hover:border-[#0e8784] transition-all duration-300">
  <div className="relative overflow-hidden" style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
  <img src={HeadquartersImage3} alt="" className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-500" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#333d4d]/60 to-transparent"></div>
  </div>
  <div className="px-6 pb-8 -mt-8 relative">
  <div className="inline-block bg-white rounded-full px-6 py-2 shadow-lg mb-4 border-2 border-[#0e8784]">
  <h3 className="text-xl sm:text-2xl font-bold text-[#0e8784]">Australia</h3>
  </div>  
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md space-y-1 text-left">
        <p className="text-sm sm:text-base text-[#333d4d] font-medium flex items-center">
          <span className="w-2 h-2 bg-[#0e8784] rounded-full mr-3"></span>
          221B Baker Street
        </p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">Marylebone</p>
        <p className="text-sm sm:text-base text-[#83888f] pl-5">Sydney</p>
        <p className="text-sm sm:text-base text-[#333d4d] font-semibold pl-5 pt-1">NW1 6XE</p>
       </div>
       </div> 
    {/* Decorative bottom accent */}
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#0e8784]/20 to-transparent rounded-tl-full"></div>
        </div>
        </div>
        </div>
        </section>
        </div>
  )
}

export default Aboutpage
