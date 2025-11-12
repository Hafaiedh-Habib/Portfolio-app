import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Je suis Habib Hafaiedh, passionné par le développement web et la data.</p>
        <a href="/projects" className="cta-btn">Voir mes projets</a>
      </section>

      <section className="home-intro">
        <img
          src="../assets/profile.jpg"
          alt="Profil"
          className="profile-pic"
        />
        <div className="intro-text">
          <h2>À propos de moi</h2>
          <p>
            Je suis étudiant en Business Intelligence passionné par la création de solutions digitales innovantes.
            Je combine ma passion pour le développement web avec une expertise en analyse de données.
          </p>
          <p>
            Mon objectif est de créer des applications web performantes et esthétiques, tout en exploitant
            la puissance de la data pour prendre de meilleures décisions.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Mes Compétences</h2>
        
        <div className="skill-category">
          <h3>🎨 Frontend</h3>
          <ul>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>⚙️ Backend</h3>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>🛠️ Outils</h3>
          <ul>
            <li>Power BI</li>
            <li>Excel</li>
            <li>Git</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>📊 Data & Analytics</h3>
          <ul>
            <li>Analyse de données</li>
            <li>Business Intelligence</li>
            <li>SQL</li>
          </ul>
        </div>
      </section>

    </div>
  );
}