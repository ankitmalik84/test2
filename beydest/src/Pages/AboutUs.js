import React from 'react';
import './AboutUs.css';
import teamImage from '../Assist/team.jpeg';
import missionImage from '../Assist/mission.gif';
import valuesImage from '../Assist/value.jpg';
import teamMember1 from '../Assist/pranjalSir.jpg';
import teamMember2 from '../Assist/ranveerSir.jpg';
import teamMember3 from '../Assist/smriti.jpg';
import teamMember4 from '../Assist/ManojJain.jpeg';
import teamMember5 from '../Assist/RajivTomar.jpeg';
import logo1 from '../Assist/Logo1.jpg';
import logo2 from '../Assist/slogo2.jpeg';
import logo3 from '../Assist/slogo3.jpeg';
import logo4 from '../Assist/slogo4.jpg';
import logo5 from '../Assist/slogo5.jpeg';
import logo6 from '../Assist/slogo6.jpeg';
import logo7 from '../Assist/slogo7.jpg';
import contact from '../Assist/contact1.webp'
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="aboutus-page">
      <section className="aboutus-hero-section">
        <div className="aboutus-overlay"></div>
        <div className="container">
          <h1 className="aboutus-hero-title animate__animated animate__fadeInDown">Solving a big problem</h1>
          <p className="aboutus-hero-subtitle animate__animated animate__fadeInUp">India's First public air purifier with a mission.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-row animate__animated animate__fadeInLeft">
            <div className="content-image">
              <img src={teamImage} alt="Our Team" />
            </div>
            <div className="content-text">
              <h2>Our Journey</h2>
              <p>Started as a research project in 2017, supported by research Beydest is building moon shoot solutions to reverse climate change by leveraging our expertise in industrial Biotechnology, material science and AI. We are empowering organzations to foster collaborative thinking to further drive innovations in Carbon negativity and adopting sustainability.</p>
              <p></p>
            </div>
          </div>

          <div className="content-row content-row-reverse animate__animated animate__fadeInRight">
            <div className="content-image">
              <img src={missionImage} alt="Our Mission" />
            </div>
            <div className="content-text">
              <h2>Our Vision and Mission</h2>
              <p> Meet present Climate change needs without compromising the needs of Future Generations. </p>
              <p> Reverse Climate change with the help of AI and Bio technology.</p>
            </div>
          </div>

          <div className="content-row animate__animated animate__fadeInLeft">
            <div className="content-image">
              <img src={valuesImage} alt="Our Values" />
            </div>
            <div className="content-text">
              <h2>Our Values</h2>
              <p><strong>Innovation:</strong> We are committed to continuous innovation and improvement, embracing new ideas and technologies to stay at the forefront of our industry.</p>
              <p><strong>Sustainability:</strong> Our dedication to sustainability drives every decision we make, ensuring that our actions positively impact the environment and society.</p>
              <p><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions, maintaining transparency and honesty with our stakeholders.</p>
              <p><strong>Collaboration:</strong> We believe in the power of collaboration, working together with our partners, clients, and communities to achieve common goals.</p>
              <p><strong>Excellence:</strong> We strive for excellence in everything we do, delivering high-quality products and services that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="team-title animate__animated animate__fadeInDown">Meet the Team</h2>
          <div className="team-grid">
            {[
              { name: 'Pranjal Yadav', role: 'Co-Founder & Chief Researcher, System & AI Engineer', img: teamMember1, linkedin: 'https://www.linkedin.com/in/pranjal-narbir-yadav-268589229/' },
              { name: 'Ar. Smriti', role: 'Co-Founder & Design Head, Lead Architect', img: teamMember3 , linkedin: 'https://www.linkedin.com/in/smriti-yadav-433822190/' },
              { name: 'Ranveer Singh', role: 'Head of R&D and Production', img:  teamMember2 , linkedin: 'https://www.linkedin.com/in/ranveer-singh-saini-10083042/' },
              { name: 'Manoj Jain', role: 'Head of operations', img:  teamMember4 , linkedin: '' },
              { name: 'Rajiv Tomar', role: 'Head of Finance', img:  teamMember5 , linkedin: '' },
              

            ].map((member, index) => (
              <div className="team-member animate__animated animate__fadeInUp" key={index}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="supported-by-section">
        <div className="container">
          <h2 className="supported-by-title animate__animated animate__fadeInDown">Supported By</h2>
          <div className="logos-grid">
            <img src={logo1} alt="Logo 1" className="logo animate__animated animate__zoomIn" />
            <img src={logo2} alt="Logo 2" className="logo animate__animated animate__zoomIn" />
            <img src={logo3} alt="Logo 3" className="logo animate__animated animate__zoomIn" />
            <img src={logo4} alt="Logo 4" className="logo animate__animated animate__zoomIn" />
            <img src={logo5} alt="Logo 5" className="logo animate__animated animate__zoomIn" />
            <img src={logo6} alt="Logo 6" className="logo animate__animated animate__zoomIn" />
            <img src={logo7} alt="Logo 7" className="logo animate__animated animate__zoomIn" />
          </div>
        </div>
      </section>


      
      <div className="contact-banner">
      <Link to="/contact" className="contact-link">
        <img src={contact} alt="Contact" className="contact-image" />
        <span>Contact</span>
      </Link>
    </div>
    </div>
  );
}

export default AboutUs;
