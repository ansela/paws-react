import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Training from "../pages/Training";
import Sitting from "../pages/Sitting";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/training" component={Training} />
      <Route path="/sitting" component={Sitting} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
