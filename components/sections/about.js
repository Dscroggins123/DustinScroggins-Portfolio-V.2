import SectionLabel from "../single/section-label";
import Computer from "../../assets/SVG/Computer";

export default function About() {
  return (
    <div className="about">
      <SectionLabel text="About Me." />
      <div className="about__content">
        <div className="about__content-backgrnd">
          <p className="about__content-info paragraph1">
            I’m a Full Stack Developer based in Moreno Valley, CA{" "}
            <span>
              I find joy experimenting with technologies to build things that
              live on the internet
            </span>
            , whether that be websites , applications, games, or anything else
            that sparks my interest. I aim to build highly functional, but very
            aesthetically pleasing products that bring joy and simplicity to
            those that use them.
          </p>
          <p className="paragraph1">
            <span >When I’m not improving my coding skills</span> or learning new
            frameworks , I enjoy releasing my stress lifting heavy weights,
            watching sports and building my investment portfolio.
          </p>
        </div>
        <div className="about__content-graphic">
          <Computer />
        </div>
      </div>
    </div>
  );
}
