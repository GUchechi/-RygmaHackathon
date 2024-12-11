import "./Recommended.css";
import recommend1 from "../../images/recommend1.jpg";
import recommend2 from "../../images/recommend2.jpg";
import recommend3 from "../../images/recommend3.jpg";
import recommend4 from "../../images/recommend4.jpg";

const recommendedItems = [
  {
    id: 1,
    image: recommend1,
    title: "You are Good",
    description: "By Israel Hougthon",
  },
  {
    id: 2,
    image: recommend2,
    title: "Omenma",
    description: "By Frank Edwards",
  },
  {
    id: 3,
    image: recommend3,
    title: "The Day",
    description: "By PlanetShakers",
  },
  {
    id: 4,
    image: recommend4,
    title: "Chance",
    description: "By Willy",
  },
];

const Recommended = () => {
  return (
    <section className="recommended">
      <h2 className="section-title">Recommended For You</h2>
      <div className="recommended-grid">
        {recommendedItems.map((item) => (
          <div className="recommended-card" key={item.id}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
