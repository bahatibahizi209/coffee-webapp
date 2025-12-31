import { ChevronUp } from "lucide-react"
import heroImage from"../../assets/image/createplan.jpg"
const steps=[
{
  number:"01",
  title: "Pick your coffee",
  desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
},
{
  number:"02",
  title: "Choose the frequency",
  desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
},
{
  number:"03",
  title: "Receive and enjoy!",
  desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
}
];
const sidebar=[
{
number:"01",
label:"Preferences",
category:"preferences"
},
{
number:"02",
label:"Bean Type",
category:"Bean Type"
},
{
number:"03",
label:"Quantity",
category:"quantity"
},
{
number:"04",
label:"GrindOption",
category:"GrindOption"
},
{
number:"05",
label:"Deliveries",
category:"deliveries"
},
];
const accordion=[
{ 
category:"want coffee",
title: "How do you drink your coffee?",
options:[
  {
    value:"Capsule",
    substitle: "",
    description:"Compatible with Nespresso systems and similar brewers",
  },
    {
    value:"Filter",
    substitle: "",
    description:"For pour over or drip methods like Aeropress, Chemex, and V60",
  },
    {
    value:"Espresso",
    substitle: "",
    description:"Dense and finely ground beans for an intense, flavorful experience",
  }
],
},
{ 
category:"type coffee",
title: "What type of coffee?",
options:[
  {
    value:"Single origin",
    substitle: "",
    description:"Distinct, high quality coffee from a specific family-owned farm.",
  },
    {
    value:"Decaf",
    substitle: "",
    description:"Just like regular coffee, except the caffeine has been removed.",
  },
    {
    value:"Blended",
    substitle: "",
    description:"Combination of two or three dark roasted beans of organic coffees.",
  }
],
},
{ 
category:"type coffee",
title: "How much would you like?",
options:[
  {
    value:"250g",
    substitle: "",
    description:"Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
    {
    value:"500g",
    substitle: "",
    description:"Perfect option for a couple. Yields about 40 delectable cups.",
  },
    {
    value:"1000g",
    substitle: "",
    description:"Perfect for offices and events. Yields about 90 delightful cups.",
  }
],
},
{ 
category:"type coffee",
title: "Want us to grind them?",
options:[
  {
    value:"Wholebean",
    substitle: "",
    description:"Best choice if you cherish the full sensory experience.",
  },
    {
    value:"Filter",
    substitle: "",
    description:"For drip or pour-over coffee methods such as V60 or Aeropress.",
  },
    {
    value:"Cafetiére",
    substitle: "",
    description:"Course ground beans specially suited for french press coffee.",
  }
],
}
]
function Createplan() { 
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
            <section className="relative rounded-lg overflow-hidden bg-gray-700
            h-[300px] sm:h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{backgroundImage:`url(${heroImage})`}}/>

            <div className="relative z-10 max-w-xl sm:ml-16 text-center px-4 sm:px-0">
            <h1 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Create a plan
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed opacity-800">
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
          {steps.map((step,index)=>(
          <div className="text-center sm:text-left">
          <div className="w-12 h-12 rounded-full border-2
          border-teal-600 bg-gray-800 mb-6 mx-auto sm:mx-0"/>
          <h3 className="font-fraunces text-5xl sm:text-7xl font-extrabold text-orange-200 mb-4">{step.number}</h3>
          <h4 className="font-fraunces text-xl sm:text-2xl font-extrabold text-white mb-3">{step.title}</h4>
          <p className="text-white opacity-80 leading-relaxed text-sm sm:text-base">{step.desc}</p>       
          </div>
          ))}
          
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
        {sidebar.map((item,index)=>(
         <div className={`text-lg sm:text-2xl font-bold`}>
          <span className="font-fraunces text-teal-600 mr-2 sm:mr-4">{item.number}</span>
        <span className="font-fraunces text-gray-700">{item.label}</span>
        </div>  
        ))}
       
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
              <p className="font-fraunces text-sm sm:text-base text-gray-700">Option Description</p>
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
        <h3 className="font-fraunces text-gray-500 uppercase text-sm mb-4 opacity-50">Order summary</h3>
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
