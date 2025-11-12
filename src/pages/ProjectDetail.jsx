import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProjectDetail.css";
import data from "../data/data.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0); // index de l'image affichée

  if (!project) return <p className="not-found">Projet non trouvé</p>;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail-page">
      <h1>{project.title}</h1>
      <p className="project-details">{project.details}</p>

      <h3>Images :</h3>
      <div className="carousel">
        <div className="carousel-inner">
          <button className="arrow left" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={project.images[currentImage]}
            alt={`${project.title} ${currentImage + 1}`}
          />
          <button className="arrow right" onClick={nextImage}>
            &#10095;
          </button>
        </div>

        <div className="dots">
          {project.images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentImage ? "active" : ""}`}
              onClick={() => setCurrentImage(idx)}
            ></span>
          ))}
        </div>
      </div>

      <h3>Technologies :</h3>
      <ul className="project-tech">
        {project.technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      <h3>Liens :</h3>
      <div className="project-links">
        {project.links.map((link, idx) => (
          <a key={idx} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Retour
      </button>
    </div>
  );
}
