import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/hero/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left Side: Hero */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Design. Code. Iterate</h1>
              <h1>
                Driven by
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                          <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                          <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>
            <p className="md:text-xl pointer-events-none">Hi, I'm Kelsey, a developer based in the midwest.</p>
            <Button id="button" text="Contact Me" className="md:w-80 m:h-16 w-60 h-12" />
          </div>
        </header>
        {/* Right Side: Hero */}
      </div>
    </section>
  )
}

export default Hero;