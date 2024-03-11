// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or feedback. Fill out the
        form below, and we'll get back to you as soon as possible.
      </p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
