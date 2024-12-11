import "./News.css";
import recommend1 from "../../images/recommend1.jpg";

const newsItems = [
  {
    id: 1,
    image: recommend1,
    title: "Breaking News: React 18 Released",
    date: "December 10, 2024",
    description:
      "The React team has officially announced the release of React 18 with exciting new features like concurrent rendering.",
  },
  {
    id: 2,
    image: recommend1,
    title: "JavaScript Trends 2024",
    date: "December 8, 2024",
    description:
      "Discover the top JavaScript trends and frameworks dominating the tech industry in 2024.",
  },
  {
    id: 3,
    image: recommend1,
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
