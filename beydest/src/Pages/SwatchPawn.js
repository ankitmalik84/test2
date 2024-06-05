import React from 'react';
import './swatchPawn.css';
import contact from '../Assist/contact1.webp';
import { Link } from 'react-router-dom';
import swatch from '../Assist/swatchpawan1.jpg';
import bisector1 from '../Assist/bisector1.jpg'
import slide3 from '../Assist/carosual/slide1.jpg'

function SwatchPawn() {
  return (
    <div className="swatchpawan-page">
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bisector1} className="d-block w-100" alt="First slide" />
      <div className="carousel-overlay">
        <div className="carousel-overlay-content">
          <h5>Taking Serious Action Against Air Pollution</h5>
          <p>
            Swatch Pawan is committed to addressing
            air pollution through innovative solutions
            and community action.
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={swatch} className="d-block w-100" alt="Second slide" />
      <div className="carousel-overlay">
        <div className="carousel-overlay-content">
          <h5>Innovative Technologies for a Cleaner World</h5>
          <p>
            We use cutting-edge technology and
            natural mosses to
            create sustainable air purification systems.
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="Third slide" />
      <div className="carousel-overlay">
        <div className="carousel-overlay-content">
          <h5>Transforming Pollution into Clean Air</h5>
          <p>
            Our solutions aim to convert polluted air
            into healthy,
            breathable air through advanced purification techniques.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  <section className="theory-section">
    <div className="container">
      <h2 className="theory-title animate__animated animate__fadeInDown">We Grow Fresh AIR</h2>
      <p className="theory-description animate__animated animate__fadeInUp">
        In partnership with Indian Oil Corporation Limited, Beydest AIR has developed India's first sustainable air purification technology. It absorbs harmful pollutants, bio-aerosols, and aromatic hydrocarbons, significantly improving air quality. Our system is more efficient than other technologies on the market, including HEPA-based systems.
      </p>
      <div className="theory-grid">
        {/* Your theory cards go here */}
      </div>
    </div>
  </section>

  <div className="contact-banner">
    <Link to="/contact" className="contact-link">
      <img src={contact} alt="Contact" className="contact-image" />
      <span>Contact</span>
    </Link>
  </div>

  <section className="unique-section">
    <div className="container">
      <h2 className="unique-title animate__animated animate__fadeInDown">Discover More</h2>
      <p className="unique-description animate__animated animate__fadeInUp">
        FACT: Ambient air pollution accounts for an estimated 4.2 million deaths per year due to stroke, heart disease, lung cancer, and respiratory diseases. Around 91% of the world's population lives in areas where air quality levels exceed WHO limits. We are on a mission to solve this problem with innovative research in biotechnology, material science, and AI.
      </p>
    </div>
  </section>
</div>

  );
}

export default SwatchPawn;
