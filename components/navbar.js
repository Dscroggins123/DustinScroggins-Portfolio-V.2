import { useState, useEffect } from "react";
import Github from "../assets/SVG/Github";
import Linkedin from "../assets/SVG/Linkedin";
import Burger from "../assets/SVG/Burger";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const animateMenu = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    openNav ? disableScroll() : enableScroll();
  }, [openNav]);

  const disableScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scroll({
        top: scrollTop,
        left: screenLeft,
      });
    };
  };
  const enableScroll = () => {
    window.onscroll = () => {};
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-overlay"></div>
        <div className="navbar__container-logo">D</div>
        <ul className={openNav ? "open" : ""}>
          <li>I.&nbsp;&nbsp;About</li>
          <li>II.&nbsp;&nbsp;Projects</li>
          <li>III.&nbsp;&nbsp;Skills</li>
          <li>IV.&nbsp;&nbsp;Contact</li>
          <span>
            <li>
              <a href="https://github.com/Dscroggins123" target="blank">
                <Github />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dustinblue/" target="blank">
                <Linkedin />
              </a>
            </li>
          </span>
        </ul>
        <div
          className={`navbar__container-burger ${openNav ? "clicked" : ""}`}
          onClick={animateMenu}
        >
          <Burger />
        </div>
      </div>
    </div>
  );
}
