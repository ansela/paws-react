import React from "react";
import { Container } from "reactstrap";
import axios from "axios";

import Header from "../components/Heading";
import Announcements from "../components/Announcements";

import { getUrl } from "../utils/api-utils";

export default class Admin extends React.Component {
  state = { announcements: [] };

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .get(getUrl("/auth/loggedIn"))
      .then(result => {
        this.getAnnouncements()
          .then(res => this.setState({ announcements: res }))
          .catch(err => console.error(err));
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push("/login");
        } else console.error(error);
      });
  }

  getAnnouncements = async () => {
    const response = await fetch(getUrl("/announcements"));

    if (response.status === 401) {
      console.log("unauthorized, rerouting");
      this.props.history.push("/login");
    }

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  onModifyAnnouncements = announcements => this.setState({ announcements });

  render() {
    const { announcements } = this.state;
    return (
      <Container>
        <Header text="Admin Panel" />
        <Announcements
          announcements={announcements}
          onModify={this.onModifyAnnouncements}
        />
      </Container>
    );
  }
}
