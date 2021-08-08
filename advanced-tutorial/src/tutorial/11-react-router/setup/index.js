import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  // router would generally wrap App.js or index.js
  // if the matches multiple routes, all will be displayed - without exact
  return (
    <Router>
      <Navbar />
      {/* just the first route that matches will be displayed */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route path="/people/:id" children={<Person />}></Route>
        {/* any route path will match */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
