import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import Announcement from "./Announcement";
import AnnouncementEditor from "./AnnouncementEditor";

export default class Announcements extends React.Component {
  static PropTypes = {
    announcements: PropTypes.array,
    onModify: PropTypes.func.isRequired
  };

  static defaultProps = {
    announcements: []
  };

  state = { showEditor: false };

  onModifyAnnouncement = (id, message) => {
    const { announcements, onModify } = this.props;
    const updatedAnnouncements = announcements.map(a => {
      if (a._id === id) return { ...a, _id: id, message };
      return a;
    });
    onModify(updatedAnnouncements);
  };

  onDeleteAnnouncement = id => {
    const { announcements, onModify } = this.props;
    const updatedAnnouncements = announcements.filter(a => a._id !== id);
    onModify(updatedAnnouncements);
  };

  onSave = text => {
    const { announcements: updatedAnnouncements, onModify } = this.props;
    this.saveAnnouncement(text)
      .then(res => {
        console.log("save successful", res);
        updatedAnnouncements.push(res);
        onModify(updatedAnnouncements);
        this.setState({ showEditor: false });
      })
      .catch(err => console.error(err));
  };
  saveAnnouncement = async message => {
    const response = await fetch("/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  onCancel = () => this.setState({ showEditor: false });

  showEditor = () => this.setState({ showEditor: true });

  renderEditor = () => {
    const { showEditor } = this.state;
    if (showEditor) {
      return (
        <AnnouncementEditor
          initialText=""
          onSave={this.onSave}
          onCancel={this.onCancel}
        />
      );
    }
    return (
      <Button outline color="success" onClick={this.showEditor}>
        Add
      </Button>
    );
  };

  render() {
    const { announcements } = this.props;

    if (announcements == null || announcements.length === 0)
      return (
        <div>
          <p>There are no announcements</p>
          {this.renderEditor()}
        </div>
      );

    return (
      <>
        <h4>Announcements</h4>
        {announcements.map(a => (
          <Announcement
            key={a._id}
            id={a._id}
            message={a.message}
            onModify={this.onModifyAnnouncement}
            onDelete={this.onDeleteAnnouncement}
          />
        ))}
        {this.renderEditor()}
      </>
    );
  }
}
