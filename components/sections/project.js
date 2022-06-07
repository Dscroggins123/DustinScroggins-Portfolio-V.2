import Image from "next/image";
import MuseXchange from "../../assets/MuseXchange.png";
import Staffing from "../../assets/Screen Shot 2021-10-05 at 11.54.20 PM.png";
import PortfolioV1 from "../../assets/Screen Shot 2021-10-05 at 11.52.37 PM.png";
import DreamQuest from "../../assets/Screen Shot 2020-10-28 at 4.07.33 PM.png";
import SectionLabel from "../single/section-label";
import Github from "../../assets/SVG/Github";
import WebLink from "../../assets/SVG/WebLink";
import {
  Bootstrap,
  Javascript,
  Css,
  Sass,
  JQuery,
  AdobeXd,
  Gsap,
  RctJS,
  NxtJS,
  NodeJS,
  MongoDB,
  MySQL,
  Express,
} from "../../assets/SVG/SkillIcons";

const ProjectInfo = [
  {
    name: MuseXchange,
    alt: "MuseXchange",
    info: "A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. Sign Up and explore different talents or upload your own products and see the sales come in!",
    stack: [<RctJS />, <MongoDB />, <NodeJS />, <Express />],
    git: "https://github.com/nickgusd/Muse-eXchange",
    web: "https://arcane-everglades-49918.herokuapp.com/",
  },
  {
    name: Staffing,
    alt: "Staffing Dashboard",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: [<RctJS />, <Sass />, "ContextAPI", <NodeJS />],
    git: false,
    web: false,
  },
  {
    name: DreamQuest,
    alt: "DreamQuest",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: [<Javascript />, <MySQL />, <NodeJS />, <JQuery />],
    git: "https://github.com/BlakeQuake/Dream-Quest",
    web: "https://boiling-scrubland-47240.herokuapp.com",
  },
  {
    name: PortfolioV1,
    alt: "Portfolio Vol.1",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: [<RctJS />, <Gsap />, "React-Styled-Components"],
    git: `https://github.com/Dscroggins123/OfficialPortfolio`,
    web: false,
  },
];

export default function Projects() {
  const tryyy = () => {
    alert("MONEYYY");
  };

  const openProjectDetails = (e) => {
    const clickedIndex = e.target.value;
    const allProjects = document.querySelectorAll(
      ".projects__content-card-description"
    );
    const allButtons = document.querySelectorAll(
      ".projects__content-card-button"
    );
    const allCloseButtons = document.querySelectorAll(
      ".projects__content-card-X"
    );
    if (allProjects[clickedIndex].getAttribute("data-clicked") === "false") {
      allProjects[clickedIndex].setAttribute("data-clicked", true);
      allButtons[clickedIndex].setAttribute("data-clicked", true);
      allButtons[clickedIndex].innerHTML = "Close Details";
    } else {
      allProjects[clickedIndex].setAttribute("data-clicked", false);
      allButtons[clickedIndex].setAttribute("data-clicked", false);
      allButtons[clickedIndex].innerHTML = "Open Project Details";
    }
    console.log(allButtons);
  };

  return (
    <div className="projects">
      <SectionLabel text="Projects." />
      <div className="projects__content">
        {ProjectInfo.map((PJ, i) => (
          <div className="projects__content-card" key={PJ.name}>
            <div
              className="projects__content-card-description "
              data-clicked={false}
            >
              <div className="projects__content-card-description-top">
                <p className="paragraph">Featured Project</p>
                <h2>{PJ.alt}</h2>
              </div>

              <p className="paragraph">{PJ.info}</p>
              <ul>
                {PJ.stack.map((stk, i) => (
                  <li key={i}>{stk}</li>
                ))}
              </ul>
              <div className="projects__content-card-description-links">
                {PJ.git ? (
                  <a href={PJ.git} target="blank">
                    <Github />
                  </a>
                ) : (
                  ""
                )}
                {PJ.web ? (
                  <a href={PJ.web} target="blank">
                    <WebLink />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="projects__content-card-image">
              <Image src={PJ.name} alt={PJ.alt} layout="fill" />
            </div>
            <button
              className="projects__content-card-button"
              value={i}
              onClick={openProjectDetails}
              data-clicked={false}
            >
              Open Project Details{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
