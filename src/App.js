import './App.css'
import { Routes,Route } from "react-router-dom";
import {About} from "./componets/About";
import {Contact} from "./componets/Contact";
import Footers  from "./componets/Footers";
import {Home} from "./componets/Home";
import Navbar from "./componets/cssfolder/Navbar";
import {Skill} from "./componets/Skill";


function App() {
  return (
  <>
    <Navbar />
    <div className='page'> 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='skill' element={<Skill />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
    </div>
    <Footers/>
   </>

  );
}

export default App;
