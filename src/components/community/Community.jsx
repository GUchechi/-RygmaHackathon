import "./Community.css";
import recommend2 from "../../images/recommend2.jpg";

const communityMembers = [
  {
    id: 1,
    image: recommend2,
    name: "John Doe",
    role: "Frontend Developer",
    bio: "John is passionate about building intuitive and engaging user interfaces. He loves React and JavaScript.",
  },
  {
    id: 2,
    image: recommend2,
    name: "Jane Smith",
    role: "Backend Developer",
    bio: "Jane specializes in Node.js and Express, crafting powerful server-side applications that scale.",
  },
  {
    id: 3,
    image: recommend2,
    name: "Alice Johnson",
    role: "UI/UX Designer",
    bio: "Alice focuses on creating beautiful, user-friendly designs that enhance the user experience.",
  },

  {
    id: 4,
    image: recommend2,
    name: "Alice Willy",
    role: "UI/UX Designer",
    bio: "Alice focuses on creating beautiful, user-friendly designs that enhance the user experience.",
  },
];

const Community = () => {
  return (
    <section className="community-section">
      <h2 className="section-title">Meet Our Community</h2>
      <div className="community-grid">
        {communityMembers.map((member) => (
          <div className="community-card" key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              className="community-image"
            />
            <div className="community-content">
              <h3 className="community-name">{member.name}</h3>
              <p className="community-role">{member.role}</p>
              <p className="community-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
