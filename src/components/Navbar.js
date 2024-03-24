import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <Link to="/">Home</Link>
      <Link to="/ourstory">Our Story</Link>
      <Link to="/weddingparty">Wedding Party</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/travel">Travel</Link>
      <Link to="/registry">Registry</Link>
      <Link to="/rsvp">RSVP</Link>
    </div>
  );
};

export default Navbar;
