import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "components/header/Header";
import Home from "components/home-page/Home";
import About from "components/about-page/About";
import Services from "components/services-page/Services";
import Reviews from "components/reviews-page/Reviews";
import Contacts from "components/contacts-page/Contacts";

const RouterApp = () => (
  <React.Fragment>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
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
