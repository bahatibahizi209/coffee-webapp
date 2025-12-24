import Header from "../src/components/Header.jsx";
import Aboutpage from "./assets/pages/Aboutpage.jsx";
import Createplan from "./assets/pages/Createplan.jsx";
import Footer from "./assets/pages/Footer.jsx";
import Homepage from "./assets/pages/Homepage.jsx";

function App() {
return(
   <div className="min-h-screen bg-gray-100">
   <Header/>
   {/* <Homepage/> */}
   {/* <Aboutpage/> */}
   <Createplan />
   <Footer/>
   </div>
   
);
}

export default App
