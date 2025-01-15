import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from "./pages/Services";
import Projectpage from "./pages/Projectpage";
import Featurepage from "./pages/Featurepage";
import Testimonal from "./pages/Testimonal";
import TeamMember from "./pages/TeamMember";
import PageError from "./pages/PageError";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
   < >
    <BrowserRouter>
      <NavBar />
      <Routes> 
      <Route exact path="/" element={<Home />} >
     </Route>
      <Route exact path="/about" element={<About />} > 
     </Route>
     <Route exact path="/services" element={<Services />}>
      </Route>
     <Route exact path="/projects" element={<Projectpage />}>
     </Route>
     <Route exact path="/feature" element={<Featurepage />}>
     </Route>
     <Route exact path="/testimonal" element={<Testimonal />}>
    </Route>
    <Route exact path="/team" element={<TeamMember />}>
   </Route>
   <Route exact path="/pageError" element={<PageError />}>
   </Route>
   <Route exact path="/contact" element={<Contact />}>
   </Route>
    </Routes>
    <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
