import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "../src/components/Header.jsx";
import Aboutpage from "./assets/pages/Aboutpage.jsx";
import Createplan from "./assets/pages/Createplan.jsx";
import Footer from "./assets/pages/Footer.jsx";
import Homepage from "./assets/pages/Homepage.jsx";

function App() {
return(
   <BrowserRouter>
   <div className="min-h-screen bg-gray-100">
   <Header/>
   <Routes>
   <Route path="/" element={<Homepage/>}/>
   <Route path="/aboutpage" element={<Aboutpage/>}/>
   <Route path="/createplan" element={<Createplan />}/>
   </Routes>  
   <Footer/>
   </div>
   </BrowserRouter>  
);
}

export default App
