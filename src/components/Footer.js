/* eslint-disable */
import React from 'react';
import logo from '../assets/img/moviedblogo.svg';
import '../assets/css/footer.css';

const Footer = () => (
  <div className="footer">
    <p>
      Created by Hemant Soni. Powered by
      {' '}
      <img
        style={{ height: 50 }}
        src={logo}
        alt="moviedblogo"
      />
    </p>
  </div>
);

export default Footer;
