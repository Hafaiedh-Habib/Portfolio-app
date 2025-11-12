// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ setIsLoggedIn, darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-logo">Mon Portfolio</div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <button onClick={toggleDarkMode} className="mode-btn">
          {darkMode ? "☀️ Jour" : "🌙 Nuit"}
        </button>
        <button onClick={handleLogout} className="logout-btn">
          Déconnexion
        </button>
      </div>
    </nav>
  );
}
