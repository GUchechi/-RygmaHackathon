import "./Upcoming.css";

const upcomingEvents = [
  {
    id: 1,
    image: "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    title: "ReactConf 2025",
    date: "March 20, 2025",
    description:
      "Join us for the biggest React conference of the year, filled with workshops, talks, and networking opportunities.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBpP3cQnJNnN9anuEvtJ4t1t6d5xQl9UNgQ&s",
    title: "JavaScript Fest 2025",
    date: "April 15, 2025",
    description:
      "Explore the future of JavaScript with industry leaders at the JavaScript Fest. Don't miss out on keynotes and technical sessions.",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/edtechdigit/usaii/content/images/the-15-most-popular-ai-tools-in-2023.jpg",
    title: "AI Innovations Summit",
    date: "May 10, 2025",
    description:
      "Dive into the latest trends in AI at the AI Innovations Summit. Learn about the future of machine learning, neural networks, and more.",
  },
];

const Upcoming = () => {
  return (
    <section className="upcoming-section">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="upcoming-grid">
        {upcomingEvents.map((event) => (
          <div className="upcoming-card" key={event.id}>
            <img
              src={event.image}
              alt={event.title}
              className="upcoming-image"
            />
            <div className="upcoming-content">
              <h3 className="upcoming-title">{event.title}</h3>
              <p className="upcoming-date">{event.date}</p>
              <p className="upcoming-description">{event.description}</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
