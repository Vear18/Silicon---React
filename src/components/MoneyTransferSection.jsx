import React from 'react';
import image1 from '../assets/images/bild1sida4.svg';
import image2 from '../assets/images/bild2sida4.svg';
import fannieImage from '../assets/images/Fannie.svg';
import albertImage from '../assets/images/Albertflores.svg';


function MoneyTransferSection() {
  return (
    <section aria-label="make your money transfer simple and clear" className="money-transfer-section">
      <div className="container4">
        <div className="left">
          <div className="text-block">
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ul>
            <a href="#" className="button">Learn more →</a>
          </div>

          <div className="image-page4-2">
            <img src={image2} alt="Money Transfer Illustration" />
          </div>
        </div>

        <div className="right">
          <div>
            <img src={image1} alt="Bank Payment Illustration" />
          </div>
          <div className="text-block">
            <h2>Receive payment from international bank details</h2>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            <p>A elementum et imperdiet enim, pretium etiam facilisi anenean quam mauris.</p>
            <a href="#" className="button">Learn more →</a>
          </div>
        </div>
      </div>

      <div className="containerr">
        <div className="left-title">
          Clients are <br /> Loving Our App
        </div>

        <div className="testimonials">
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-text">
              Sit pretium aliquam tempor, orci dolor sed malesuada rutrum sagittis. Laoreet posuere molestie egestas lacus.
            </p>
            <div className="testimonial-author">
              <img src={fannieImage} alt="Fannie Summers" />
              <div className="author-info">
                <span className="author-name">Fannie Summers</span>
                <span className="author-title">Designer</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-text">
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin porttitor. Nulla blandit tincidunt.
            </p>
            <div className="testimonial-author">
              <img src={albertImage} alt="Albert Flores" />
              <div className="author-info">
                <span className="author-name">Albert Flores</span>
                <span className="author-title">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoneyTransferSection;