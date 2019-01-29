import React, { Component } from "react";

import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
