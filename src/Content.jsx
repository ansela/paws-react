import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Training from "./Training";
import Sitting from "./Sitting";
import Reviews from "./Reviews";
import Contact from "./Contact";

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/training" component={Training} />
      <Route path="/sitting" component={Sitting} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default Content;
