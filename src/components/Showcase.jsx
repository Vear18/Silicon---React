import React from 'react';
import Appstorelogo from '../assets/images/Groupappstore.svg';
import GoogleplayLogo from '../assets/images/Frame48095376googleplay.svg';
import appstore from '../assets/images/Telefon1.svg';


function Showcase() {
  return (
    <section aria-label="showcase" className="showcase">
      <div className="container space-y-3">
        <h1 className="d4">Manage All Your Money in One App</h1>
        <div>
          <div className="content space-y-3">
            <p className="text-lg">
              We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
            </p>
            <div className="market-btns">
              <a href="#" className="store-btn">
                <span className="sr-only">Download on the App Store</span>
                <img src={Appstorelogo} alt="App Store" />
              </a>
              <a href="#" className="store-btn">
                <span className="sr-only">Get it on Google Play</span>
                <img src={GoogleplayLogo} alt="Google Play" />
              </a>
            </div>
            <div className="more">
              <a href="#features" className="btn-round btn-white">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <span>Discover more</span>
            </div>
          </div>
          <div className="phone-img-container">
            <img src={appstore} alt="two iPhones with app" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;