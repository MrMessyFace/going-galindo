import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-section">
      <div className="title-section">
        <h1>Kelsey & Jessie</h1>
        <h2>December 7, 2024 - Sioux City, IA</h2>
        <h3>Countdown</h3>
      </div>
      <br></br>
      <div className="navbar-section">
        <Link to="/">Home</Link>
        <Link to="/ourstory">Our Story</Link>
        <Link to="/weddingparty">Wedding Party</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/rsvp">RSVP</Link>
      </div>
    </div>
  );
};

export default Navbar;
