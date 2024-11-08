import React from 'react';
import imageRight from '../assets/images/höger.svg';
import imageCenter from '../assets/images/iPhonemitten.svg';
import imageLeft from '../assets/images/vänster.svg';


function HowItWorks() {
  return (
    <section aria-label="How does it work" className="carousel-section">
      <div className="container space-y-3">
        <h2 className="h1">How Does It Work?</h2>

        <div className="carousel">
          <div className="carousel-item">
            <img src={imageRight} alt="Carousel Right Item" />
          </div>
          <div className="carousel-item">
            <img src={imageCenter} alt="Carousel Center Item" />
          </div>
          <div className="carousel-item">
            <img src={imageLeft} alt="Carousel Left Item" />
          </div>
        </div>

        <div className="text">
          <h3 className="h4">Latest transaction history</h3>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;