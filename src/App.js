import "react-dates/initialize";
import React from "react";

import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./styles/main.scss";

const App = () => (
  <div className="app">
    <NavBar />
    <Content />
    <Footer />
  </div>
);

export default App;
