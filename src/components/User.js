import React from "react";

export default function User({ name, location, email, picture }) {
  return (
    <div className="random-user">
      <div className="user-image">
        <img src={picture.medium} alt={name.first} />
      </div>
      <div>
        <strong>Name:</strong> {name.first} {name.last}
      </div>
      <div>
        <strong>Country:</strong> {location.country}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
}
