import React from 'react';
import MyAccountImage from '../MyAccountImage';
import MyAccountInfo from '../MyAccountInfo';

const MyAccount = () => {
  return (
    <div className="content-container">
      <div className="profile-container">
        <MyAccountImage />
        <MyAccountInfo />
      </div>
    </div>
  );
}

export default MyAccount;
