import SectionLabel from "../single/section-label";
import MailLogo from "../../assets/SVG/MailLogo";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-label">
        <SectionLabel text="Contact" />
      </div>
      <div className="contact__content">
        <p className="paragraph1">
          {" "}
          If you'd like to discuss anything regardless of its tech related or
          not please dont hesistate to shoot me an email.
          <span> I'm currently open to new job opportunities</span> or just
          projects that may spark my interest. I will respond to all messages
          ASAP I look forward to speaking with you!{" "}
        </p>
        <a href="mailto:Dscroggins123@gmail.com">
          <MailLogo />
        </a>
      </div>
    </div>
  );
}
