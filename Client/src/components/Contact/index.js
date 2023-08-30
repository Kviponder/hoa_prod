import React, { useState } from "react";
import EmailValidator from "email-validator"; // Import the email validator library

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && EmailValidator.validate(email) && message) {
      // Perform your form submission logic here
      setFormSubmitted(true);
    } else {
      // Handle form validation errors
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {formSubmitted && <p>Thank you for your submission!</p>}
      </div>
    </section>
  );
}

export default Contact;
