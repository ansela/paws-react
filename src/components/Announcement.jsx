import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { Card, CardBody, CardText, CardFooter, Button } from "reactstrap";

import AnnouncementEditor from "./AnnouncementEditor";

export default class Announcement extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    onModify: PropTypes.func.isRequired
  };

  static defaultProps = {
    startDate: null,
    endDate: null
  };

  state = { showEditor: false };

  showEditor = () => this.setState({ showEditor: true });

  onSave = (text, startDate, endDate) => {
    const { id, onModify } = this.props;
    onModify(id, text, startDate, endDate);
    this.setState({ showEditor: false });
    this.saveAnnouncement({ _id: id, message: text, startDate, endDate }).catch(
      err => console.error(err)
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

  renderDate = () => {
    const { startDate, endDate } = this.props;
    if (
      startDate != null &&
      endDate != null &&
      Moment(startDate).isValid() &&
      Moment(endDate).isValid()
    ) {
      return (
        <div>
          {Moment(startDate).format("MM/DD/YY")}-
          {Moment(endDate).format("MM/DD/YY")}
        </div>
      );
    }
    return null;
  };

  render() {
    const { message, startDate, endDate } = this.props;
    const { showEditor } = this.state;

    if (showEditor) {
      return (
        <AnnouncementEditor
          initialText={message}
          initialStartDate={startDate}
          initialEndDate={endDate}
          onSave={this.onSave}
        />
      );
    }

    return (
      <Card className="paws-announcement">
        <CardBody>
          <CardText>{message}</CardText>
          {this.renderDate()}
        </CardBody>
        <CardFooter>
          <Button className="float-right" onClick={this.showEditor} outline>
            Edit
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
