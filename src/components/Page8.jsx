import React from 'react';

const Page8 = () => {
  return (
    <div id="page8">
      <footer className="footer">
        <div className="footer-top">
          <h1 className="headline">Have a project in mind?<br />Contact Us!</h1>
          <div className="footer-contact">
            <button className="deck-btn">CHECK OUR LATEST DECK</button>
            <div className="location">
              <p className="label">OUR LOCATION:</p>
              <p>1300 W El Camino Real<br />#100, Mountain View, CA 94040</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <p className="label">SHAPING EXPERIENCES:</p>
            <ul>
              <li>UX Audit</li>
              <li>UI Design</li>
              <li>UX Design</li>
              <li>UX Research</li>
            </ul>
          </div>
          <div className="link-group">
            <p className="label">WHERE WE SHINE:</p>
            <ul>
              <li>SaaS</li>
              <li>Web App</li>
              <li>Mobile App</li>
              <li>Website Design</li>
            </ul>
          </div>
          <div className="link-group">
            <p className="label">BEHIND THE SCREENS:</p>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="link-group">
            <p className="label">OUR SOCIAL:</p>
            <div className="social-buttons">
              <button>Linkedin</button>
              <button>Facebook</button>
              <button>Instagram</button>
              <button>Dribbble</button>
              <button>Behance</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page8;
