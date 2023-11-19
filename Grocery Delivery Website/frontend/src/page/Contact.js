import React from 'react';

const Contact = () => {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }} id="contact">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }} className="container">
        <h1 style={{ textAlign: 'center', color: '#0000FF', fontSize: '3.5rem', marginBottom: '40px' }} className="heading">
          <span>Contact </span> Us
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="row">
          <div style={{ flex: '1 1 60%' }} className="form">
            <h3 style={{ color: '#000', fontSize: '1.8rem', marginBottom: '20px' }}>Send Us A Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '1.2rem', color: '#333', marginBottom: '8px' }} htmlFor="name">Name</label>
              <input style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" id="name" name="name" placeholder="Your Name" required />

              <label style={{ fontSize: '1.2rem', color: '#333', marginBottom: '8px' }} htmlFor="email">Email</label>
              <input style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }} type="email" id="email" name="email" placeholder="Your Email" required />

              <label style={{ fontSize: '1.2rem', color: '#333', marginBottom: '8px' }} htmlFor="message">Message</label>
              <textarea style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }} id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

              <button style={{ padding: '12px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2rem' }} type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>

          <div style={{ flex: '1 1 35%' }} className="info">
            <h2 style={{ color: '#000', fontSize: '1.9rem', marginBottom: '20px' }}>Contact Information</h2>
            <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.6' }}>
              Address: 123 Grocery Street, Cityville, TamilNadu, 631450.
              <br />
              Email: <a href='mailto:lslgrocery@gmail.com'>lslgrocery@gmail.com</a>
              <br />
              Phone: +1 234-567-8901
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;