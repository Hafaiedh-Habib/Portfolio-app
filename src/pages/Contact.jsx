import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Réinitialiser les champs
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);

    // Masquer le message après 3 secondes
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contactez-moi</h1>
          <p>N'hésitez pas à me contacter pour toute question ou collaboration</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Message envoyé avec succès !
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom :</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email :</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message :</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              <button type="submit">Envoyer le message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>📧 Email</h3>
              <p>Envoyez-moi un email directement :</p>
              <a href="mailto:habib.hafaiedh@isgb.ucar.tn">habib.hafaiedh@isgb.ucar.tn</a>
            </div>

            <div className="info-card">
              <h3>📱 Téléphone</h3>
              <p>Appelez-moi :</p>
              <a href="tel:+21650525571">+216 50 525 571</a>
            </div>

            <div className="info-card">
              <h3>📍 Localisation</h3>
              <p>Basé à :</p>
              <p>Menzel jemil , Bizerte, Tunisie</p>
              <p >
                Disponible pour des projets en remote
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}