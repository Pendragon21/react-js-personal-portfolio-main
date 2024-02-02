import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Rafael</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front end | Data Science</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm a enthusiastic developer, willing to show my skills and learn even more. 
            <br /> Love cats, chess and read.
          </p>
        </div>
        <br />
        <a href="./CV-English-Rafael.pdf" class="button" download className="btn btn-primary ">Dowload CV</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/logoR.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
