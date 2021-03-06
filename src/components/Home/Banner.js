import React from 'react';

import '../Global/css/Banner.css';

const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Banner</p>
      </div>
    </div>
  );
};

export default Banner;