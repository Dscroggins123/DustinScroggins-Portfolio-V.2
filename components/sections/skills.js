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

const SkillIcons = [
  {
    tag: "Javascript",
    icon: <Javascript />,
  },
  { tag: "CSS", icon: <Css /> },
  { tag: "SASS", icon: <Sass /> },
  { tag: "Bootstrap", icon: <Bootstrap /> },
  { tag: "AdobeXD", icon: <AdobeXd /> },
  { tag: "GSAP", icon: <Gsap /> },
  { tag: "React", icon: <RctJS /> },
  { tag: "NextJS", icon: <NxtJS /> },
  { tag: "JQuery", icon: <JQuery /> },
  { tag: "NodeJS", icon: <NodeJS /> },
  { tag: "MongoDB", icon: <MongoDB /> },
  { tag: "MySQL", icon: <MySQL /> },
  { tag: "Express", icon: <Express /> },
];

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__content">
        <div className="skills__content-label">
          <SectionLabel text="Skills." />
        </div>
        <div className="skills__content-icons">
          {SkillIcons.map((el) => (
            <div data-tag={el.tag} className="skills__content-icons--image">
              {el.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
