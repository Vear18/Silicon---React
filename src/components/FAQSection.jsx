// src/components/FAQSection.js
import React from 'react';
import phoneIcon from '../assets/images/telefoniconlila.svg';
import messengerIcon from '../assets/images/messengericon.svg';
import arrowIcon from '../assets/images/arrow1.png';


const FAQSection = () => {
  const faqs = [
    {
      question: 'Is any of my personal information stored in the App?',
      answer: 'Yes, the app stores some personal information, including your name, address, and email, for account management purposes.',
    },
    {
      question: 'What formats can I download my transaction history in?',
      answer: 'You can download your transaction history in various formats such as PDF and CSV.',
    },
    {
      question: 'Can I schedule future transfers?',
      answer: "Yes, you can schedule future transfers using the app. Just go to the Transfers section and select the date and amount you'd like to transfer.",
    },
    {
      question: 'When can I use Banking App services?',
      answer: 'You can use the Banking App services 24/7. However, transfers might take up to 1-3 business days depending on the type of transaction.',
    },
    {
      question: 'Can I create my own password that is easy for me to remember?',
      answer: 'Yes, the app allows you to create a custom password, as long as it meets the security requirements.',
    },
    {
      question: 'What happens if I forget or lose my password?',
      answer: 'If you forget your password, you can reset it through the "Forgot Password" feature in the login section.',
    },
  ];

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
          <div key={index} className="faq-item">
            <div className="question">
              <span>{faq.question}</span>
              <span className="icon">
                <img src={arrowIcon} alt="Arrow Icon" />
              </span>
            </div>
            <div className="answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
