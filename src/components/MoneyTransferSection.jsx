import React, { useEffect, useState } from 'react';

function MoneyTransferSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      });
  }, []);

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
        </div>

        <div className="right">
          <h2 className="left-title">Clients are Loving Our App</h2>
          <div className="testimonials">
            {loading ? (
              <p>Loading testimonials...</p>
            ) : (
              testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="rating">
                    {'★'.repeat(testimonial.starRating)}{'☆'.repeat(5 - testimonial.starRating)}
                  </div>
                  <p className="testimonial-text">{testimonial.comment}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatarUrl} alt={`${testimonial.author}`} />
                    <div className="author-info">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-title">{testimonial.jobRole}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoneyTransferSection;





