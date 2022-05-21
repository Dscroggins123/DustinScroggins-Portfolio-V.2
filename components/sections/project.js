import Image from "next/image";
import MuseXchange from "../../assets/MuseXchange.png";
import Staffing from "../../assets/Screen Shot 2021-10-05 at 11.54.20 PM.png";
import PortfolioV1 from "../../assets/Screen Shot 2021-10-05 at 11.52.37 PM.png";
import DreamQuest from "../../assets/Screen Shot 2020-10-28 at 4.07.33 PM.png";
import SectionLabel from "../single/section-label";
import Github from "../../assets/SVG/Github";
import WebLink from "../../assets/SVG/WebLink";

const ProjectInfo = [
  {
    name: MuseXchange,
    alt: "MuseXchange",
    info: "A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. Sign Up and explore different talents or upload your own products and see the sales come in!",
    stack: ["React.js", "MongoDB", "Node.js", "Express.js"],
    git: "https://github.com/nickgusd/Muse-eXchange",
    web: "https://arcane-everglades-49918.herokuapp.com/",
  },
  {
    name: Staffing,
    alt: "Staffing Dashboard",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: ["React.js", "SCSS", "ContextAPI", "Node.js"],
    git: false,
    web: false,
  },
  {
    name: DreamQuest,
    alt: "DreamQuest",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: ["Javascript", "MySQL", "Node.js", "JQuery"],
    git: "https://github.com/BlakeQuake/Dream-Quest",
    web: "https://boiling-scrubland-47240.herokuapp.com",
  },
  {
    name: PortfolioV1,
    alt: "Portfolio Vol.1",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: ["React.js", "React-Styled-Components", "GSAP"],
    git: "https://github.com/Dscroggins123/OfficialPortfolio",
    web: false,
  },
];

export default function Projects() {
  const tryyy = () => {
    alert("MONEYYY");
  };

  return (
    <div className="projects">
      <SectionLabel text="Projects." />
      <div className="projects__content">
        {ProjectInfo.map((PJ) => (
          <div className="projects__content-card">
            <div className="projects__content-card-description">
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

              <p className="paragraph">Featured Project</p>
              <h2>{PJ.alt}</h2>
              <p className="paragraph">{PJ.info}</p>
              <ul>
                {PJ.stack.map((stk, i) => (
                  <li key={i}>{stk}</li>
                ))}
              </ul>
            </div>
            <div className="projects__content-card-image">
              <Image src={PJ.name} alt={PJ.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
