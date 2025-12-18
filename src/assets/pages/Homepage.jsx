import Hero from "../image/coffee6.jpg"
function Homepage() {
  return (
    <div className="">
    {/* Hero Section */}
    <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="relative rounded-lg overflow-hidden bg-gray-700
    h-[400px] sm:h-[500px] flex items-center">
    <div className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{backgroundImage:`url(${Hero})`}}/>
    <div className="relative z-10 max-w-xl sm:ml-16 mx-auto text-center sm:text-left">
    {/* Text Block */}
    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
    Pure Coffee
    </h1>
    <p className="text-white text-base sm:text-lg mb-8 leading-relaxed">
    Fuel your day with premium blends crafted for true coffee lovers. Discover
    handpicked beans from skilled roasters, freshly delivered straight to your home
    exactly when you want them.
    </p>
    <a href="" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold
    py-3 px-6 sm:px-8 rounded transition-colors">Create your Plan
    </a>  
    </div>
    </div>
    </section>
    {/* coffee collection */}
    <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-center text-3xl sm:text-5xl
    font-bold text-gray-700 opacity-30 mb-12 sm:mb-20">Our Collection</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* use map method */}
    <div className="text-center">
    <div className="mb-6 flex justify-center">
    <img src="" alt="" className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded" />
    </div>
     <h3 className="text-xl sm:text-2xl font-bold text-gray-700 opacity-80">Coffee Title</h3>
     <p className="text-sm sm:text-base leading-relaxed">Coffee description</p>
    </div>
    </div>
    </section>
    {/* why choose us */}
    <div className="max-w-7xl mx-auto px-6 py-16 mb-24">
    <div></div>
    </div>
    </div>
  )
}

export default Homepage
