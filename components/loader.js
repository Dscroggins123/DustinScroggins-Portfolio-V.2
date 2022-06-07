import { useEffect, useState } from "react";
import { gsap } from "gsap";
import LogoD from "../assets/SVG/DLogo";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const path = document.querySelectorAll("#SuperDusty");
    path.forEach((el) => {
      let num = el.getTotalLength();
      handleAnimate(el, num);
    });
  }, []);

  const handleAnimate = (el, num) => {
    var tl = gsap.timeline();
    tl.fromTo(
      el,
      { strokeDasharray: num, strokeDashoffset: num },
      { strokeDashoffset: 0, duration: 1.5 }
    );
    tl.to(".loader__logo", {
      scale: 0.35,
      duration: 1,
      opacity: 0,
      delay: 1.5,
    });
    tl.to("#Logo", { stroke: "#0c273be3" });
    tl.to(".loader", { opacity: 0, zIndex: -1, duration: 0.4 });
  };

  return (
    <div className="loader">
      <video autoPlay loop muted>
        <source src="/Stars.mp4" type="video/mp4" />
      </video>
      <div className="loader__logo">
        <LogoD />
      </div>
    </div>
  );
};

export default Loader;
