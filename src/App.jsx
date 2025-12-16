import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Aboutpage from "./assets/pages/Aboutpage";
import Recipepage from "./assets/pages/Recipepage";
import Footer from "./components/Footer";

function App() {
return(
   <Router>
<div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-teal-50">
<Header/>
<main>
   <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>
      <Route path="/recipes" element={<Recipepage/>}></Route>
   </Routes>
  </main>
<Footer/>
</div>
   </Router>
  
);
}

export default App
