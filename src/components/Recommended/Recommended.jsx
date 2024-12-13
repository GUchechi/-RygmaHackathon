import "./Recommended.css";
import recommend3 from "../../images/recommend3.jpg";

const recommendedItems = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/godswilluchechi/image/upload/v1734053093/israel_1_m2supz.jpg",
    title: "You are Good",
    description: "By Israel Hougthon",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Frank_Edwards_Frank_Edwards.jpg",
    title: "Mma Mma",
    description: "By Frank Edwards",
  },
  {
    id: 3,
    image: recommend3,
    title: "Turn it up",
    description: "By PlanetShakers",
  },
  {
    id: 4,
    image:
      "https://www.ccmmagazine.com/wp-content/uploads/2019/01/Elevation-Worship-2019.jpg",
    title: "Praise",
    description: "Elevation Worship",
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
