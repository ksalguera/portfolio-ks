import { useRef } from "react";
import { showcaseProjects } from "../../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const projectOne = showcaseProjects[0];
  const projectTwo = showcaseProjects[2];
  const projectThree = showcaseProjects[1];
  const sectionRef = useRef(null);
  const projectOneRef = useRef(null);
  const projectTwoRef = useRef(null);
  const projectThreeRef = useRef(null);
  
  useGSAP(() => {
    // animation for all three projects
    const projectRefs = [projectOneRef.current, projectTwoRef.current, projectThreeRef.current];
    projectRefs.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    })

    // animation for the overall section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={projectOneRef}>
            <div className="image-wrapper">
              <img src={projectOne.image} alt={projectOne.title} />
            </div>
            <div className="text-content">
              <h2>{projectOne.description}</h2>
              <p className="md:text-xl">{projectOne.note}</p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={projectTwoRef}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src={projectTwo.image} alt={projectTwo.title} />
              </div>
              <h2>{projectTwo.description}</h2>
            </div>
            <div ref={projectThreeRef} className="project-list">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={projectThree.image} alt={projectThree.title} />
              </div>
              <h2>{projectThree.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase;