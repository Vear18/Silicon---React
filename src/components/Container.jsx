import React from 'react';


import logo1 from '../assets/images/Loggar/logoipsum.svg';
import logo2 from '../assets/images/Loggar/logoipsum 2.svg';
import logo3 from '../assets/images/Loggar/logoipsum 3.svg';
import logo4 from '../assets/images/Loggar/logoipsum 4.svg';
import logo5 from '../assets/images/Loggar/logoipsum 5.svg';
import logo6 from '../assets/images/Loggar/logoipsum 6.svg';

function CustomerLogos() {
  return (
    <section aria-label="our customers" className="logos">
      <div className="container">
        <div className="logo-card">
          <img src={logo1} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logo2} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logo3} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logo4} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logo5} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logo6} alt="logoipsum logotype" />
        </div>
      </div>
    </section>
  );
}

export default CustomerLogos;