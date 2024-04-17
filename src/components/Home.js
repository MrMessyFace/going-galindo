import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-section">
      <br></br>
      <h1>KELSEY & JESSIE</h1>
      <h2>Saturday, December 7, 2024</h2>
      <p>Countdown</p>
      <br></br>
      <div className="banner">
        <img
          src={require("../assets/images/homepage-banner.jpg")}
          alt="Kelsey & Jessie"
        />
      </div>
      <br></br>
      <button className="buttonStyle"><Link to="/rsvp">RSVP</Link></button>
      <br></br>
      <div>
        <div>
          <p>Wedding</p>
          <p>December 7, 2024</p>
          <p>4:00 PM</p>
          <p>Holy Cross Parish Blessed Sacrament Catholic Church</p>
          <p>3012 Jackson St, Sioux City, IA 51104</p>
        </div>
        <br></br>
        <div>
          <p>Reception</p>
          <p>December 7, 2024</p>
          <p>5:00 PM</p>
          <p>Sioux City Convention Center</p>
          <p>801 4th St, Sioux City, IA 51101</p>
        </div>
      </div>
      <br></br>
      <div className="stinger">
        <img
          src={require("../assets/images/homepage-stinger.jpg")}
          alt="Kelsey & Jessie"
        />
      </div>
      <br></br>
    </div>
  );
};

export default Home;
