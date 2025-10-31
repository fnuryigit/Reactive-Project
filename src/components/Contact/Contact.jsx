// src/components/Contact/Contact.jsx
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Sol taraf: Form ve bilgiler */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We are always ready to assist you with your queries and support
            requests.
          </p>
          <p>
            Reach out to us for more information or to schedule a consultation.
          </p>
          <p>
            <strong>Mobile:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Email:</strong> info@powerfull.com
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Make an Appointment</button>
          </form>
        </div>

        {/* Sağ taraf: Harita */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019330510175!2d-122.41941568468256!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a37f0d5%3A0x4a82e56e3a0b8e3f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698789471234!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Powerfull Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
