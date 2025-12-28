import { Box, BoxIcon } from "lucide-react"
import Hero from "../image/coffee6.jpg"
import GranEspresso from "../image/granespresso.png"
import Planalto from "../image/planalto.png"
import Piccollo from "../image/piccollo.png"
import Danche from "../image/danche.png"
const coffeeItems=[
{
  src: GranEspresso,
  title: "Gran Espresso",
  desc: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
},
{
  src: Planalto,
  title: "Planalto",
  desc: "Brazilian dark roast with rich and velvelty body and hints of fruits and nuts.",
},
{
  src: Piccollo,
  title: "Piccollo",
  desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
},
{
  src: Danche,
  title: "Danche",
  desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
} 
];
const boxes=[
{
  src: GranEspresso,
  title: "Best quality",
  desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
},
{
  src: Planalto,
  title: "Exclusive benefits",
  desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
},
{
  src: Piccollo,
  title: "Free shipping",
  desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
}
];
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
    {coffeeItems.map((item,index)=>(
    <div className="text-center">
    <div className="mb-6 flex justify-center">
    <img src={item.src} alt="" className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded" />
    </div>
     <h3 className="text-xl sm:text-2xl font-bold text-gray-700 opacity-80">{item.title}</h3>
     <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
    </div>
    ))}
    
    </div>
    </section>
    {/* why choose us */}
    <section className="max-w-7xl mx-auto px-6 py-16 mb-24">
    <div className="bg-gray-700 rounded-lg px-6 sm:px-16 py-12 sm:py-20">
    <h2 className="text-center sm:text-4xl font-bold text-white mb-6">Why choose us?</h2>
    <p className="text-center text-white opacity-80 max-w-2xl mx-auto mb-12 sm:mb-16
    leading-relaxed text-sm sm:text-base">
    We carefully select which coffees are featured in our range. working closely with top coffee growers
    ensures a premium experience in every cup.
    </p>
   
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 -mb-16 sm:-mb-32">
    {/* i will use map method */}
    <div className="bg-teal-600 rounded-lg p-8 ms:p-12 text-center">
    <div className="flex justify-center mb-6">
    <div className="w-16 h-16 bg-white opacity-20 rounded-full flex items-center justify-center">
     Box icon
    </div>
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Box title</h3>
    <p className="text-white opacity-90 leading-relaxed text-sm sm:text-base">Box paragraph</p>
    </div>
    </div>
    </div>
    </section>
    {/*   How it works */}

   <section className="max-w-7xl mx-auto px-6 py-16 sm:py-32">
  <h2 className="text-gray-700 text-xl sm:text-2xl font-bold mb-12 sm:mb-20 text-center sm:text-left">
    How it works
  </h2>

  {/* line */}
  <div className="relative mb-20 hidden sm:block">
    <div className="absolute top-6 left-0 right-0 h-0.5 bg-orange-300" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
    {/* Step 1 */}
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-teal-600 bg-gray-200 mb-10" />
      <h3 className="text-5xl sm:text-7xl font-bold text-orange-300 mb-4">
        01
      </h3>
      <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
        Pick your coffee
      </h4>
      <p className="text-gray-700 opacity-80 leading-relaxed">
      choose from our curated range of artisan coffees.New selections added
      every month.
      </p>
      <div className="text-center sm:text-left mt-12">
    <a href="" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold
    py-3 px-6 sm:px-8 rounded transition-colors">Create your Plan
    </a>  
    </div>
    </div>    
    </div>
    </section>
    </div>
  )
}

export default Homepage
