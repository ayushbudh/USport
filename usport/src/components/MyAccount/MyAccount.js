import React from 'react';
import MyAccountImage from '../MyAccountImage';
import MyAccountInfo from '../MyAccountInfo';
import './MyAccount.css';

const MyAccount = () => {
  return (
    <div className="content-container">
      <div className="my-account-container">
        <MyAccountImage />
        <MyAccountInfo />
      </div>
    </div>
  );
}

export default MyAccount;

