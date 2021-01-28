import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import Services from "./components/services/Services.js";
import Reviews from "./components/reviews/Reviews.js";
import Contacts from "./components/contacts/Contacts.js";

const RouterApp = () => (
  <React.Fragment>
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

function App() {
  return (
    <React.Fragment>
      <RouterApp />
    </React.Fragment>
  );
}

export default App;
