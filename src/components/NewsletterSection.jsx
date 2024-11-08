import React from 'react';
import notificationIcon from '../assets/images/notification.svg'; 


function NewsletterSection() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <img src={notificationIcon} alt="Newsletter Bell Icon" />
        <p>Subscribe to our newsletter to stay informed about latest updates</p>
      </div>

      <form className="newsletter-form">
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSection;
