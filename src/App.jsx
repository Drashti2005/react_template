import React, { useEffect } from 'react'
import './templatemo-3d-coverflow.css';

const App = () => {
  useEffect(() => {
    // Load the external JavaScript file
    const script = document.createElement('script');
    script.src = 'templatemo-3d-coverflow-scripts.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    alert("Privacy Policy page would go here");
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <div>
      {/* Header */}
      <header className="header" id="header">
        <a href="#home" className="logo-container">
          <div className="logo">
            {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <rect x="10" y="25" width="15" height="50" fill="url(#grad1)" transform="rotate(-15 17.5 50)" />
                    <rect x="35" y="15" width="15" height="70" fill="url(#grad1)" />
                    <rect x="60" y="25" width="15" height="50" fill="url(#grad1)" transform="rotate(15 67.5 50)" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad1)" stroke-width="2" opacity="0.5" />
                </svg> */}
          </div>
          <div className="logo-text">DRASHTI Travels - Gujarat</div>
        </a>

        <nav className="main-menu" id="mainMenu">
          <a href="#home" className="menu-item active">Home</a>
          <a href="#about" className="menu-item">About</a>
          <a href="#contact" className="menu-item">Contact</a>
          <a href="https://github.com/Drashti2005" target="_blank" rel="noopener noreferrer" className="menu-item external">GitHub</a>
        </nav>

        <div className="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      {/* Home Section */}
      <section id="home" className="section">
        <div className="coverflow-wrapper">
          <div className="info">
            <h2 id="current-title">Statue Of Unity</h2>
            <p id="current-description">The Statue of Unity stands tall as the world’s tallest statue</p>
          </div>

          <div className="coverflow-container" tabIndex="0">
            <div className="coverflow" id="coverflow">
              <div className="coverflow-item" data-index="0">
                <div className="cover image-loading">
                  <img src="images/Statue-of-unity.jpg" alt="Statue of unity" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="1">
                <div className="cover image-loading">
                  <img src="images/Rann-of-kutchh.jpg" alt="Runn of kutchh" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="2">
                <div className="cover image-loading">
                  <img src="images/Rani-ki-vav.jpg" alt="Rani ke vav" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="3">
                <div className="cover image-loading">
                  <img src="images/Gir.jpg" alt="Gir" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="4">
                <div className="cover image-loading">
                  <img src="images/Dwarka.jpg" alt="Dwarka temple" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="5">
                <div className="cover image-loading">
                  <img src="images/Smriti-van.jpg" alt="Smriti van" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
              <div className="coverflow-item" data-index="6">
                <div className="cover image-loading">
                  <img src="images/Laxmi-vilas-palace.jpg" alt="Laxmi vilas palace" loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
            </div>

            <button className="nav-button prev" onClick={()=>navigate(-1)}>‹</button>
              <button className="nav-button next" onClick={()=>navigate(1)}>›</button>

            <div className="dots-container" id="dots"></div>
              {/* Play/Pause Button */}
            <button className="play-pause-button" id="playPauseBtn" onClick={()=>toggleAutoplay()}>
              <span className="play-icon">▶</span>
              <span className="pause-icon" style={{display: 'none'}}>❚❚</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section  */}
    <section id="about" className="section">
        <div className="about-content">
            <div className="about-header">
                <h2>Get to Know Us</h2>
                <p>Delivering seamless travel solutions with trust and excellence.</p>
            </div>
            
            <div className="about-main">
                <div className="about-visual">
                    <div className="showcase-display">
                        <div className="showcase-main">
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration bottom-right"></div>
                            
                            <div className="showcase-logo">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="25" width="15" height="50" fill="white" transform="rotate(-15 17.5 50)" opacity="0.9" />
                                    <rect x="35" y="15" width="15" height="70" fill="white" />
                                    <rect x="60" y="25" width="15" height="50" fill="white" transform="rotate(15 67.5 50)" opacity="0.9" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                                </svg>
                            </div>
                            
                            <h3 className="showcase-title">Major Atraction</h3>
                            <p className="showcase-subtitle">The Highly recommandated places of gujrat are right here....</p>
                            
                            <div className="showcase-badges">
                                <a href="https://www.gujarattourism.com/kutch-zone/kutch/great-rann-of-kutch.html" target="_blank" rel="noopener noreferrer" className="badge">Runn of Kutch</a>
                                <a href="https://www.gujarattourism.com/central-zone/narmada/statue-of-unity.html" target="_blank" rel="noopener noreferrer" className="badge">Statue of Unity</a>
                                <a href="https://www.gujarattourism.com/north-zone/mehsana/sun-temple-modhera.html" target="_blank" rel="noopener noreferrer" className="badge">Sun Temple</a>
                                <a href="https://www.gujarattourism.com/saurashtra/junagadh/girnar-hill.html" target="_blank" rel="noopener noreferrer" className="badge">Girnar Hill</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-info">
                    <h3>Exploring the Gujarat, one story at a time.</h3>
                    <p>Gujarat, the land of legends and colors, invites travelers to explore its rich heritage, diverse landscapes, and vibrant culture. From the white desert of Kutch to the roaring lions of Gir, every corner of Gujarat tells a unique story.Gujarat is not just a destination, it’s an experience — where every step echoes with history, every festival bursts with joy, and every journey leaves you with unforgettable memories.</p>
                    <p>Become a part of DRASHTI Travels and gain these exclusive advantages: </p>
                    
                    <ul className="feature-list">
                        <li>Personalized Travel Planning</li>
                        <li>Comfort & Convenience</li>
                        <li>Expert Guidance </li>
                        <li>Exclusive Deals Special discounts and packages</li>
                        <li>Cultural Experiences, Opportunities to explore local traditions and festivals</li>
                        <li>24/7 Support Assistance whenever you need it</li>
                    </ul>
                    
                    <a href="#contact" className="cta-button">
                        Make a Plan Now
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div className="stats-section">
                <div className="stat-item">
                    <div className="stat-number">9+ / 10</div>
                    <div className="stat-label">Our Rating</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Security</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Lowest</div>
                    <div className="stat-label">Pricing</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Satisfaction</div>
                </div>
            </div>
        </div>
    </section>

     {/* Contact Section  */}
    <section id="contact" className="section">
        <div className="contact-content">
            <div className="contact-header">
                <h2>Reach Your Destination With Us</h2>
                <p>Connect with us because every great trip starts with the right guidance.</p>
            </div>
            
            <div className="contact-container">
                <div className="contact-info-section">
                    <h3>Let's Connect</h3>
                    <p>We’re always ready to assist you with your travel needs. Whether you have questions, need guidance, or want to plan your next adventure, our team at DRASHTI Travels is just a message away. Reach out today and let us help turn your journey into a memorable experience.</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>drashtijariwala2005@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Contact</h4>
                                <p>+91 9825152160</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Address</h4>
                                <p>123 tourist street, surat, Gujarat.</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <div className="social-buttons">
                            <a href="#" className="social-btn" title="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" className="social-btn" title="Twitter">
                                <svg viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" className="social-btn" title="LinkedIn">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="social-btn" title="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-section">
                    <form className="contact-form onSubmit={handleSubmit}">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Destinations</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Any Special Request</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Book A Trip Now</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-copyright">
                © 2025 DRASHTI Travels- Gujarat. All rights reserved. | Designed by <a href="https://github.com/Drashti2005" target="_blank" rel="noopener noreferrer">Drashti Jariwala</a>
            </div>
            <div className="footer-links">
                <a href="#privacy" onClick={handleClick}>Privacy Policy</a>
                <a href="#terms" onClick={handleClick}>Terms of Service</a>
            </div>
        </div>
    </footer>

    <div className="scroll-to-top" id="scrollToTop">
        <span>↑</span>
    </div>
    </div >
  );
};

export default App;
