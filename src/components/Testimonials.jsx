import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching testimonials...');
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then((response) => response.json())
      .then((data) => {
        console.log('Testimonials fetched:', data);
        setTestimonials(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="h1">What our clients say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'★'.repeat(testimonial.starRating)}{'☆'.repeat(5 - testimonial.starRating)}
              </div>
              <p className="testimonial-text">{testimonial.comment}</p>
              <div className="testimonial-author">
                <img src={testimonial.avatarUrl} alt={testimonial.author} />
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-title">{testimonial.jobRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
