import React, { useEffect, useState } from 'react';
import phoneIcon from '../assets/images/telefoniconlila.svg';
import messengerIcon from '../assets/images/messengericon.svg';
import arrowIcon from '../assets/images/arrow1.png';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then((response) => response.json())
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching FAQs:', error);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) {
    return <p>Loading FAQs...</p>;
  }

  return (
    <div className="faq-container">
      <div className="left-section">
        <h2>Any questions?<br />Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>

        <div className="contact-buttons">
          <div className="contact-button">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>Still have questions?</span>
            <a href="#">Contact us →</a>
          </div>
          <div className="contact-button">
            <img src={messengerIcon} alt="Messenger Icon" />
            <span>Don't like phone calls?</span>
            <a href="#">Contact us →</a>
          </div>
        </div>
      </div>

      

      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="question">
              <span>{faq.title}</span>
              <span className="icon">
                <img
                  src={arrowIcon}
                  alt="Arrow Icon"
                  style={{
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </span>
            </div>
            <div className="answer">{faq.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;





