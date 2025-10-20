import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // For a static site, you can integrate with services like Formspree or Netlify Forms.
    // Here we just simulate success.
    setStatus("Thanks! I'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="contact card">
        <h2>Contact</h2>
        <p className="subtitle">Have a project in mind? Let's talk.</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Email address" required />
          </div>
          <textarea name="message" rows="5" placeholder="Your message" required />
          <button className="btn primary" type="submit">Send Message</button>
        </form>
        {status && <p className="success">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
