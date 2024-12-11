import "./Recommended.css";

const recommendedItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Recommended Item 1",
    description: "This is a short description for item 1.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Recommended Item 2",
    description: "This is a short description for item 2.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Recommended Item 3",
    description: "This is a short description for item 3.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Recommended Item 4",
    description: "This is a short description for item 4.",
  },
];

const Recommended = () => {
  return (
    <section className="recommended">
      <h2 className="section-title">Recommended for You</h2>
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
