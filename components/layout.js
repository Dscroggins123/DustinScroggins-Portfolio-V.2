import { useEffect, useState } from "react";
import Loader from "./loader";
import Navbar from "./navbar";
import UpArrow from "../assets/SVG/UpArrow";

export default function Layout({ children }) {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    var aboutSection = document.querySelector(".about");
    var aboutCoords = aboutSection.getBoundingClientRect();
    if (aboutCoords.top <= 50) {
      setShowScrollUp(true);
    } else setShowScrollUp(false);
  }, [scroll]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="layout">
      <Loader />
      <Navbar />
      {showScrollUp && (
        <div className="layout__scrollUp" onClick={handleScrollToTop}>
          <UpArrow />
        </div>
      )}

      {children}
    </main>
  );
}
