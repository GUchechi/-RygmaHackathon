import "./News.css";

const newsItems = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/5e6542d2ae16460bb741a9eb/1603318636443-A846ACUKNYUBA0RPLJ94/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
    title: "Breaking News: K-Fest Hackathon",
    date: "December 13, 2024",
    description:
      "The First ever Hackathon to be hosted by FWC is here! The Kingdom Technology Festival Hackathon!",
  },
  {
    id: 2,
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "JavaScript Trends 2024",
    date: "December 8, 2024",
    description:
      "Discover the top JavaScript trends and frameworks dominating the tech industry in 2024.",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
    title: "AI and the Future of Web Development",
    date: "December 5, 2024",
    description:
      "A deep dive into how AI is shaping the future of web development and creating smarter tools.",
  },
];

const News = () => {
  return (
    <section className="news-section">
      <h2 className="section-title">Latest News</h2>
      <div className="news-grid">
        {newsItems.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-date">{news.date}</p>
              <p className="news-description">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
