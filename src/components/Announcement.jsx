import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { Card, CardBody, CardText, CardFooter, Button } from "reactstrap";

import AnnouncementEditor from "./AnnouncementEditor";

export default class Announcement extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    onModify: PropTypes.func.isRequired
  };

  state = { showEditor: false };

  showEditor = () => this.setState({ showEditor: true });

  onCancel = () => this.setState({ showEditor: false });

  onSave = text => {
    const { id, onModify } = this.props;
    onModify(id, text);
    this.setState({ showEditor: false });
    this.saveAnnouncement({ _id: id, message: text }).catch(err =>
      console.error(err)
    );
  };

  saveAnnouncement = async announcement => {
    const response = await fetch(`/announcements/${announcement._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(announcement)
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  deleteAnnouncement = () => {
    const { id } = this.props;
    fetch(`/announcements/${id}`, {
      method: "DELETE"
    });
  };

  render() {
    const { message } = this.props;
    const { showEditor } = this.state;

    if (showEditor) {
      return (
        <AnnouncementEditor
          initialText={message}
          onSave={this.onSave}
          onCancel={this.onCancel}
        />
      );
    }

    return (
      <Card className="paws-announcement">
        <CardBody>
          <CardText>{message}</CardText>
        </CardBody>
        <CardFooter>
          <Button className="float-right" onClick={this.showEditor} outline>
            Edit
          </Button>
          <Button
            color="danger"
            className="float-right"
            onClick={this.deleteAnnouncement}
            outline
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
