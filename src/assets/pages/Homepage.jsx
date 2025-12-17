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
    </div>
    </div>
    </section>
    </div>
  )
}

export default Homepage
