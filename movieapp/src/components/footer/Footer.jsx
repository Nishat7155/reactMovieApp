import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
        </div>
      </div>
      <div className="footer-column">
        <h4>Get Help</h4>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Download App</h4>
        <div className="app-icons">
          <img src="https://img.icons8.com/ios-filled/48/ffffff/google-play.png" alt="Google Play Icon" />
          <img src="https://img.icons8.com/ios-filled/48/ffffff/mac-os--v1.png" alt="Apple App Store Icon" />

        </div>
      </div>
    </footer>
  );
}

export default Footer;
