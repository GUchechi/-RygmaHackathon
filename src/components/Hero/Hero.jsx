import { Link } from "react-router";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h3>
            Welcome to <span className="brand">Rygma</span>
          </h3>
          <p>Your one-stop platform for exploring amazing Music Lyrics.</p>
          <Link to="/lyrics" className="button">Explore</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
