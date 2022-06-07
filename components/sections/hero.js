import LogoD from "../../assets/SVG/DLogo";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__background">
        <LogoD />
      </div>
      <div className="hero__content">
        <h3>Welcome ! &nbsp;I'm</h3>
        <h1 className="heading-1">
          <span>Dustin Scroggins.</span>
        </h1>
        <h1 className="heading-1">
          I <span>create</span> cool<span> Web products.</span>
        </h1>
        <h3 className="subtitle">{`Full stack Developer & Overall Great Human`}</h3>
      </div>
    </div>
  );
}
