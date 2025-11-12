// src/pages/Projects.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";
import data from "../data/data.json";

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // État pour la catégorie

  const handleClick = (id) => {
    navigate(`/projects/${id}`);
  };

  // Filtrer les projets selon la catégorie
  const filteredProjects =
    filter === "all" ? data : data.filter((project) => project.category === filter);

  return (
    <div className="projects-page">
      <h1>Mes Projets</h1>

      {/* Boutons de filtre */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Tous
        </button>
        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
        <button
          className={filter === "mobile" ? "active" : ""}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </button>
        <button
          className={filter === "desktop" ? "active" : ""}
          onClick={() => setFilter("desktop")}
        >
          Desktop
        </button>
      </div>

      {/* Liste des projets */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleClick(project.id)}
          >
            <img src={project.images[0]} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
