import Hero from "./sections/Hero";
import NavBar from "./components/Navbar";
import VantaBackground from "./sections/hero/VantaBackground";  
import Showcase from "./sections/showcase/Showcase";

const App = () => {
  return (
    <>
      <NavBar />
      <VantaBackground>
        <Hero />
      </VantaBackground>
      <Showcase />
    </>
  )
}

export default App;