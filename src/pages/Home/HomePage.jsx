import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home-container">
      <div className="home-wrapper">
        <div className="home-content">
          <h3>
            Welcome to <span className="brand">Rygma</span>
          </h3>
          <p>Your one-stop platform for exploring amazing Music Lyrics.</p>
          <button className="button">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
