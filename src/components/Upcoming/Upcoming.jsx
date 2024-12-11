import React from "react";
import "./Upcoming.css";
import recommend4 from "../../images/recommend4.jpg";

const upcomingEvents = [
  {
    id: 1,
    image: recommend4,
    title: "ReactConf 2025",
    date: "March 20, 2025",
    description:
      "Join us for the biggest React conference of the year, filled with workshops, talks, and networking opportunities.",
  },
  {
    id: 2,
    image: recommend4,
    title: "JavaScript Fest 2025",
    date: "April 15, 2025",
    description:
      "Explore the future of JavaScript with industry leaders at the JavaScript Fest. Don't miss out on keynotes and technical sessions.",
  },
  {
    id: 3,
    image: recommend4,
    title: "AI Innovations Summit",
    date: "May 10, 2025",
    description:
      "Dive into the latest trends in AI at the AI Innovations Summit. Learn about the future of machine learning, neural networks, and more.",
  },
  {
    id: 3,
    image: recommend4,
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
