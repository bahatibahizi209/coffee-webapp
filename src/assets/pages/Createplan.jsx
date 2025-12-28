import { ChevronUp } from "lucide-react"
import heroImage from"../../assets/image/createplan.jpg"
function Createplan() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
            <section className="relative rounded-lg overflow-hidden bg-gray-700
            h-[300px] sm:h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{backgroundImage:`url(${heroImage})`}}/>

            <div className="relative z-10 max-w-xl sm:ml-16 text-center px-4 sm:px-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Create a plan
            </h1>
            <p className="text-white text-base sm:text-lg leading-relaxed opacity-800">
            Build a subscription plan that best fits your needs. we offer an assortment of the best artisan
            coffees from around the world delivered fresh to your door.
            </p>
            </div>
            </section>
            {/* step section */}
            <section className="max-w-7xl max-auto px-6 py-16">
            <div className="bg-gray-800 rounded-lg px-6 sm:px-16 sm:py-20 mb-16">
            <div className="relative">
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-orange-200 hidden sm:block"/>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* use map method */}
          <div className="text-center sm:text-left">
          <div className="w-12 h-12 rounded-full border-2
          border-teal-600 bg-gray-800 mb-6 mx-auto sm:mx-0"/>
          <h3 className="text-5xl sm:text-7xl font-bold text-orange-200 mb-4">01</h3>
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">Title</h4>
          <p className="text-white opacity-80 leading-relaxed text-sm sm:text-base">Description</p>       
          </div>
          </div>
            </div>
            </div>
            </section>
          {/* Accordion + sidebar */}
<section className="max-w-7xl mx-auto px-6 pb-32">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
    {/* sidebar */}
    <div className="lg:col-span-3 mb-12 lg:mb-0">
      <div className="space-y-4">
        <div className={`text-lg sm:text-2xl font-bold`}>
          <span className="text-teal-600 mr-2 sm:mr-4">Item Number</span>
          <span className="text-gray-700">Item Label</span>
        </div>
      </div>
    </div>

    {/* accordion */}
    <div className="lg:col-span-9 space-y-12">
      {/* use map method */}
      <div>
        <button className="w-full flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-700">Section Title</h2>
          <ChevronUp className="text-teal-600" size={28}/>
        </button>

        {/* conditional rendering */}
        <div className="space-y-8">     
          {/* use map method */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-300`}>
            {/* use map method */}
            <button className={`text-left p-6 sm:p-8 rounded-lg transition-all bg-gray-100 hover:bg-gray-200`}>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900">
                Subtitle
              </h3>
              <p className="text-sm sm:text-base text-gray-700">Option Description</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* order summary - aligned with accordion */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
    <div className="lg:col-span-3"></div>
    <div className="lg:col-span-9">
      <div className="bg-gray-800 rounded-lg p-6 sm:p-12">
        <h3 className="text-gray-500 uppercase text-sm mb-4 opacity-50">Order summary</h3>
        <p className="text-white text-base sm:text-l leading-relaxed">
          I drink my coffee as{" "}
          <span className="text-teal-500 font-bold">__</span> , with a{" "}
          <span className="text-teal-500 font-bold">__</span> type of bean.{" "}
          <span className="text-teal-500 font-bold">__</span> ground ala{" "}
          <span className="text-teal-500 font-bold">__</span> ,sent to me{" "}
          <span className="text-teal-500 font-bold">__</span>
        </p>
      </div>

      <div className="text-center mt-6">
        <button className={`bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded transition-all`}>
          Create my plan!
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Createplan
