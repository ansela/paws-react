import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import Header from "../components/Heading";
import Announcements from "../components/Announcements";
import AnnouncementEditor from "../components/AnnouncementEditor";

export default class Admin extends React.Component {
  state = { announcements: [] };

  componentDidMount() {
    this.getAnnouncements()
      .then(res => this.setState({ announcements: res }))
      .catch(err => console.error(err));
  }

  getAnnouncements = async () => {
    const response = await fetch("/announcements");
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
