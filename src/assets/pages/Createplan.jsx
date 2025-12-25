import heroImage from"../../assets/image/coffee6.jpg"
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
          {/*   Accordion + sidebar */}
          <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* sidebar */}
          <div className=""></div>
          </div>
          </section>
    </div>
  )
}

export default Createplan
