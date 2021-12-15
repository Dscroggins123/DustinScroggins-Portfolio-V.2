import Image from "next/image";
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
import SectionLabel from "../single/section-label";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__content">
        <div className="skills__content-label"><SectionLabel text="Skills."/></div>
        <div className="skills__content-icons">
          <Bootstrap />
          <Javascript />
          <Css />
          <Sass />
          <JQuery />
          <AdobeXd />
          <Gsap />
          <RctJS />
          <NxtJS />
          <NodeJS />
          <MongoDB />
          <MySQL />
          <Express />
        </div>
      </div>
    </div>
  );
}
