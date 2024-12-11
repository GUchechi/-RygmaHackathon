import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Rygma</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <button
        className={`menu-icon ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
