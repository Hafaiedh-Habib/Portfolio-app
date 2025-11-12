// App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {isLoggedIn && (
        <Navbar
          setIsLoggedIn={setIsLoggedIn}
          darkMode={darkMode}
          setDarkMode={setDarkMode} 
        />
      )}

      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home darkMode={darkMode} /> : <Navigate to="/" />}
        />
        <Route
          path="/projects"
          element={isLoggedIn ? <Projects darkMode={darkMode} /> : <Navigate to="/" />}
        />
        <Route
          path="/projects/:id"
          element={isLoggedIn ? <ProjectDetail darkMode={darkMode} /> : <Navigate to="/" />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact darkMode={darkMode} /> : <Navigate to="/" />}
        />
      </Routes>

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
