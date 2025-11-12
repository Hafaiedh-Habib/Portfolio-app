import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "habib@gmail.com" && password === "0000") {
      setIsLoggedIn(true); // ← très important
      navigate("/home");
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-page">
      <h1>Connexion</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
