import "./assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/OurStoryPage";
import WeddingPartyPage from "./pages/WeddingPartyPage";
import FAQPage from "./pages/FAQPage";
import TravelPage from "./pages/TravelPage";
import RegistryPage from "./pages/RegistryPage";
import RSVPPage from "./pages/RSVPPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ourstory" component={OurStoryPage} />
          <Route path="/weddingparty" component={WeddingPartyPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/travel" component={TravelPage} />
          <Route path="/registry" component={RegistryPage} />
          <Route path="/rsvp" component={RSVPPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
