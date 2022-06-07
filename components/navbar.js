import { useState, useEffect } from "react";
import Github from "../assets/SVG/Github";
import Linkedin from "../assets/SVG/Linkedin";
import Burger from "../assets/SVG/Burger";
import useRefresh from "../hooks/useRefresh";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const setRefresh = useRefresh();

  const animateMenu = () => {
    setOpenNav(!openNav);
    console.log(openNav);
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
        left: scrollLeft,
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
        <div
          className="navbar__container-logo"
          onClick={() => setRefresh(true)}
        >
          D
        </div>
        <ul className={openNav ? "open" : ""}>
          <li>I.&nbsp;&nbsp;About</li>
          <li>II.&nbsp;&nbsp;Projects</li>
          <li>III.&nbsp;&nbsp;Skills</li>
          <li>IV.&nbsp;&nbsp;Contact</li>
          <div className="navbar__container-social">
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
          </div>
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
