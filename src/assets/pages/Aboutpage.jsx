import Header from "../../components/Header"
import heroImage from "../../assets/image/coffee5.jpg"
import aboutImage from "../../assets/image/barista2.jpg"
import QualityImage from "../../assets/image/barista4.jpg"
import HeadquartersImage from "../../assets/image/location.jpg"
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
        <div className="text-center">
        <img src={HeadquartersImage} alt="" className="w-full h-58 object-cover rounded-lg mb-4 sm:mb-6" />
        <h3 className="text-xl sm:text-3xl font-bold text-gray-700 mb-2 sm:mb-6">United Kingdom</h3>
        <p className="opacity-80 text-sm sm:text-base">221B Baker Street</p>
        <p className="opacity-80 text-sm sm:text-base">Marylebone</p>
        <p className="opacity-80 text-sm sm:text-base">London</p>
        <p className="opacity-80 text-sm sm:text-base">NW1 6XE</p>
        </div>
        
        </div>
        </section>
        </div>
  )
}

export default Aboutpage
