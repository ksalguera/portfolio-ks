import Hero from "./sections/Hero";
import VantaBackground from "./sections/hero/VantaBackground";  
import Showcase from "./sections/showcase/Showcase";

const App = () => {
  return (
    <>
      <VantaBackground>
        <Hero />
      </VantaBackground>
      <Showcase />
    </>
  )
}

export default App;