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
            
    </div>
  )
}

export default Createplan
