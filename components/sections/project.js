import Image from "next/image";
import MuseXchange from "../../assets/MuseXchange.png";
import Staffing from "../../assets/Screen Shot 2021-10-05 at 11.54.20 PM.png";
import PortfolioV1 from "../../assets/Screen Shot 2021-10-05 at 11.52.37 PM.png";
import DreamQuest from "../../assets/Screen Shot 2020-10-28 at 4.07.33 PM.png";
import SectionLabel from "../single/section-label";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        <SectionLabel text="Projects."/>
        <p> Featured work</p>
        <div className="projects__content-featured">
          <Image src={MuseXchange} alt="MuseXchange" />
          <Image src={Staffing} alt="Staffing Dashboard" />
          <Image src={PortfolioV1} alt="Portfolio V1" />
          <Image src={DreamQuest} alt="DreamQuest" />
        </div>
        <div className="projects__content-extra">
            <div > 
            </div>
        </div>
      </div>
    </div>
  );
}
