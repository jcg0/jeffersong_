import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "./Portfolio.css";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default Portfolio;
