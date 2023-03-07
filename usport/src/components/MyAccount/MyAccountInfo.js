import React from 'react';

const MyAccountInfo = () => {
  return (
    <div className="profile-info-container">
      <h1 className="name">John Doe</h1>
      <p className="email">johndoe@example.com</p>
      <p className="phone">123-456-7890</p>
      <button className="edit-profile-btn">Edit My Account</button>
    </div>
  );
};

export default MyAccountInfo;
