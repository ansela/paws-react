import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./styles/main.scss";

class App extends Component {
  state = { data: "empty" };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.error(err));
  }

  callApi = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="app">
        <div>{this.state.data}</div>
        <NavBar />
        <Content data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
