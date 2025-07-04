
import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '120px' }} />
        <h1>Common Sense Document Services</h1>
        <p><em>Affordable Help for Everyday People</em></p>
      </header>

      <section>
        <h2>Languages</h2>
        <p>🌐 Available in English, Español, 한국어</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/mnqwykvd" method="POST">
          <label>Name:<br />
            <input type="text" name="name" required />
          </label><br /><br />
          <label>Email:<br />
            <input type="email" name="email" required />
          </label><br /><br />
          <label>Message:<br />
            <textarea name="message" rows="5" required></textarea>
          </label><br /><br />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
