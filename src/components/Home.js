import React from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const Home = () => {
  const targetDate = new Date("2024-12-07T16:00:00");

  return (
    <div className="home-section">
      <br></br>
      <h1>KELSEY & JESSIE</h1>
      <h2>Saturday, December 7, 2024</h2>
      <CountdownTimer targetDate={targetDate} />
      <br></br>
      <div className="banner">
        <img
          src={require("../assets/images/homepage-banner.jpg")}
          alt="Kelsey & Jessie"
        />
      </div>
      <br></br>
      <div className="home-big">
        <div className="home-date">
          <h1>December 7, 2024</h1>
        </div>
        <div className="home-city">
          <h1>SIOUX CITY IOWA</h1>
        </div>
      </div>
      <br></br>
      <button className="button-style">
        <Link to="/rsvp">RSVP</Link>
      </button>
      <div>
        <div>
          <h2>Wedding Day</h2>
          <h3>Saturday, December 7, 2024</h3>
        </div>
        <br></br>
        <hr className="horizontal-line-two" />
        <br></br>
        <div>
          <h2>Ceremony</h2>
          <p>Holy Cross Parish Blessed Sacrament Catholic Church</p>
          <p>3012 Jackson St, Sioux City, Iowa 51104</p>
        </div>
        <br></br>
        <hr className="horizontal-line-two" />
        <br></br>
        <div>
          <h2>Reception</h2>
          <p>Sioux City Convention Center</p>
          <p>801 4th St, Sioux City, Iowa 51101</p>
        </div>
        <br></br>
        <hr className="horizontal-line-two" />
        <br></br>
      </div>
      <br></br>
      <div className="stinger">
        <img
          src={require("../assets/images/homepage-stinger.jpg")}
          alt="Kelsey & Jessie"
        />
      </div>
      <br></br>
      <div>
        <h1>K&J</h1>
        <hr className="horizontal-line" />
        <br></br>
        <h3>12.7.2024</h3>
      </div>
      <br></br>
    </div>
  );
};

export default Home;
