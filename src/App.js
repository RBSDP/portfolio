
import Navbar from "./components/navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div >
      
      <Navbar/>
      <Home />
      <About/>
      <Projects/>
      
      <Experience/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
