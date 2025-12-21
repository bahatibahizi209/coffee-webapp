import Header from "../../components/Header"
import heroImage from "../../assets/image/coffee5.jpg"
import aboutImage from "../../assets/image/barista2.jpg"
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
        rounded-lg w-full h-64 sm:h-80 md:h-[500px] object-cover" />
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
        </div>
        </div>
        </section>
        </div>
  )
}

export default Aboutpage
