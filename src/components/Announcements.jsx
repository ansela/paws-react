import React from "react";
import PropTypes from "prop-types";

import Announcement from "./Announcement";

const Announcements = ({ announcements, onModify }) => {
  const onModifyAnnouncement = (id, message) => {
    console.log(id, message);
    const updatedAnnouncements = announcements.map(a => {
      if (a._id === id) return { ...a, _id: id, message };
      return a;
    });
    onModify(updatedAnnouncements);
  };

  if (announcements == null || announcements.length === 0)
    return <div>Sorry, there are no announcements</div>;

  return (
    <>
      <h4>Announcements</h4>
      {announcements.map(a => (
        <Announcement
          key={a._id}
          id={a._id}
          message={a.message}
          onModify={onModifyAnnouncement}
        />
      ))}
    </>
  );
};

export default Announcements;
