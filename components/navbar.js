import Github from "../assets/SVG/Github";
import Linkedin from "../assets/SVG/Linkedin";
import { Burger } from "../assets/SVG/Burger";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">  
        <div className="navbar__container-overlay"></div>
        <div className="navbar__container-logo">DS</div>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
            <span>
              <li>
                <a href="#">
                  <Github />
                </a>
              </li>
              <li>
                <a href="#">
                  <Linkedin />
                </a>
              </li>
            </span>
          </ul>
          <div className="navbar__container-burger">
              <Burger/>
          </div>

        </div>
      </div>
  );
}
