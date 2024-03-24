import React from "react";

const WeddingParty = () => {
  return (
    <div className="wedding-party-section">
      <h1>Wedding Party</h1>
      <br></br>
      <div className="wedding-party-list">
        <div className="bride-side-section">
          <div className="bride-side-columns">
            <div className="bride-side-column-one">
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Anyssa Larson</h3>
              <h4>Matron of Honor</h4>
              <p>
                <i>Sister of the Bride</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Ally Blackburn</h3>
              <h4>Bridesmaid</h4>
              <p>
                <i>Step-Sister of the Bride</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Dana Trejo</h3>
              <h4>Bridesmaid</h4>
              <p>
                <i>Sister-In-Law of the Bride</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Olivia Fladby</h3>
              <h4>Flower Girl</h4>
              <p>
                <i>Niece of the Groom</i>
              </p>
            </div>
            <div className="bride-side-column-two">
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Jessica Ward</h3>
              <h4>Bridesmaid</h4>
              <p>
                <i>Friend of the Bride</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Kylie Galindo</h3>
              <h4>Bridesmaid</h4>
              <p>
                <i>Sister of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Aliyana Garcia</h3>
              <h4>Junior Bridesmaid</h4>
              <p>
                <i>Niece of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/female-silhouette.jpg")} />
              <h3>Carolina Trejo</h3>
              <h4>Flower Girl</h4>
              <p>
                <i>Niece of the Bride</i>
              </p>
            </div>
          </div>
        </div>
        <div className="groom-side-section">
          <div className="groom-side-columns">
            <div className="groom-side-column-one">
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>Demetrius Hearte</h3>
              <h4>Best Man</h4>
              <p>
                <i>Friend of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>A.J. Ellingwood</h3>
              <h4>Groomsman</h4>
              <p>
                <i>Friend of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>Mitchell Trejo</h3>
              <h4>Groomsman</h4>
              <p>
                <i>Brother of the Bride</i>
              </p>
            </div>
            <div className="groom-side-column-two">
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>John Robert Galindo</h3>
              <h4>Groomsman</h4>
              <p>
                <i>Brother of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>Kevin Daniels</h3>
              <h4>Groomsman</h4>
              <p>
                <i>Friend of the Groom</i>
              </p>
              <br></br>
              <img src={require("../assets/images/male-silhouette.jpg")} />
              <h3>Damian Whisler</h3>
              <h4>Junior Groomsman</h4>
              <p>
                <i>Son of the Groom</i>
              </p>
            </div>
          </div>
          <br></br>
          <img src={require("../assets/images/male-silhouette.jpg")} />
          <h3>Holden Fladby</h3>
          <h4>Ring Bearer</h4>
          <p>
            <i>Nephew of the Groom</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
