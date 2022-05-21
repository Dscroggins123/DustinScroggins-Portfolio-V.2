import { useRef, useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/project";
import Skills from "../components/sections/skills";
import Contact from "../components/sections/contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const sections = [<About />, <Projects />, <Skills />, <Contact />];

  const addToRefs = (section) => {
    if (section && !revealRefs.current.includes(section)) {
      revealRefs.current.push(section);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none pause",
          },
        }
      );
    });
  }, []);

  return (
    <Layout>
      <div className="main">
        <Hero />
        {sections.map((section, i) => (
          <div ref={addToRefs}>{section}</div>
        ))}
      </div>
    </Layout>
  );
}
