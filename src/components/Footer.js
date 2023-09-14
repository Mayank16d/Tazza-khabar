import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      
    <footer className="footer bg-dark text-light">
      <div className="container">
        
          <div className="col">
            <h5>About Us</h5>
            <p>
              Welcome to Our News Website! We are dedicated to providing you with the latest and most reliable news from around the world. Our team of experienced journalists and editors work tirelessly to deliver accurate and up-to-date news across various categories such as Business, Entertainment, General, Health, Science, Sports, and Technology.
            </p>
            <p>
              Our mission is to keep you informed and empowered with the knowledge you need to make informed decisions in today's fast-paced world. Whether it's breaking news, insightful analysis, or in-depth features, we strive to deliver the highest quality content that meets your needs.
            </p>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: info@yournewswebsite.com</li>
              <li>Phone: +1 123 456 7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col">
            <h5>Follow Us</h5>
            <div className="footer__social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col text-center">
            <div className="footer__copy">
              &copy; {new Date().getFullYear()} Your News Website. All rights reserved.
            </div>
          </div>
        
      </div>
    </footer>
 

    )
  }
}





{/* import React from 'react';

const Footer = () => {
  return (
    
    
  );
};

export default Footer; */}
