import Image from "next/image";
import MuseXchange from "../../assets/MuseXchange.png";
import Staffing from "../../assets/Screen Shot 2021-10-05 at 11.54.20 PM.png";
import PortfolioV1 from "../../assets/Screen Shot 2021-10-05 at 11.52.37 PM.png";
import DreamQuest from "../../assets/Screen Shot 2020-10-28 at 4.07.33 PM.png";
import SectionLabel from "../single/section-label";

const ProjectInfo = [
  {
    name: MuseXchange,
    alt: "MuseXchange",
    info: "A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. Sign Up and explore different talents or upload your own products and see the sales come in!",
    stack: ["React.js", "MongoDB", "Node.js", "Express.js"],
  },
  {
    name: Staffing,
    alt: "Staffing Dashboard",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack:["React.js","SCSS", "ContextAPI","PostgreSQL", "Node.js"]
  },
  {
    name: DreamQuest,
    alt: "DreamQuest",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: ["Javascript", "My SQL/Sequelize", "Node.js", "JQuery"],
  },
  {
    name: PortfolioV1,
    alt: "Portfolio Vol.1",
    info: "A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun. Are you prepared to take the Quest??",
    stack: ["React.js","React-Styled-Components", "GSAP"],
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <SectionLabel text="Projects." />
        {ProjectInfo.map((PJ) => (
      <div className="projects__content">
            <div className="projects__content-image">
            <div className="projects__content-image-description">
              <p className="paragraph">Featured Project</p>
              <h2>{PJ.alt}</h2>
              <p className="paragraph">{PJ.info}</p>
              <ul className="projects__content-image-description-stack">
              {PJ.stack.map((stk) => 
              
              <li>{stk}</li>
                )}
                </ul>
            </div>
              <Image src={PJ.name} alt={PJ.alt} />
            </div>
        
        <div className="projects__content-extra">
          <div></div>
        </div>
      </div>
        ))}
    </div>
  );
}
