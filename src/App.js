import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
