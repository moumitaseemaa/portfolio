import About from "./components/About";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Protfolio from "./components/Protfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Protfolio/>
      <Blogs/>
      <Contact/>
    </>
  );
}

export default App;
