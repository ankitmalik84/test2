import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import biode from '../Assist/bio.avif';
import absorf from '../Assist/absorb.jpg';
import startup2022 from '../Assist/awards/startup2022.jpeg'
import president from '../Assist/awards/president.jpeg'
import smogathon from '../Assist/awards/smogathon.jpeg'
import assam from '../Assist/awards/assam.jpeg'
import cnbc from '../Assist/awards/cnbc.jpeg'
import oxygen from '../Assist/oxygen.jpg';
import cloudanalytics from '../Assist/CloudAnalytics.jpg';
import grid from '../Assist/GridPowe.jpg';
import spacefacilities from '../Assist/urban.webp';
import contact from '../Assist/contact1.webp'
import slide1 from '../Assist/slider1.jpg'
import slide2 from '../Assist/slide2.jpg'
import slide3 from '../Assist/slide3.jpg'
import slide4 from '../Assist/machines/slide4.jpg'
import indianoil from '../Assist/awards/indianoil.jpeg'
function Home() {
  return (
    <div className="home">
     <header className="home-hero-section">
      <div className="home-overlay"></div>
      <div className="container">
        <div className="home-hero-content">
          <h1 className="home-hero-title animate__animated animate__fadeInDown">Welcome to Beydest</h1>
          <p className="home-hero-subtitle animate__animated animate__fadeInUp">Building Habitat supporting system for the Next Billion.</p>
          <Link to='/aboutUs' className="btn btn-primary home-hero-button animate__animated animate__fadeInUp animate__delay-1s">Learn More</Link>
        </div>
      </div>
    </header>
      <section class="product-section">
        <h2  className='text-center' > Technology is protected by 8 IP including 4 Patents</h2>
        <div class="product-row product-row-reverse">
  <div class="product-content animate__animated animate__fadeInRight">
    <h3>Beydest AIR 2.0 Delhi 2023 Launch</h3>
    <p>The Beydest AIR 2.0, launched in Delhi in 2023, represents the pinnacle of our innovative air purification technology. This state-of-the-art model features dimensions of 26ft by 8ft and is equipped with 8 HBOG panels specifically designed for direct carbon capture. It is particularly effective in industrial settings such as refineries, where it can significantly reduce harmful emissions and improve air quality. With its advanced capabilities, the Beydest AIR 2.0 is set to revolutionize how urban environments manage pollution and maintain cleaner air standards.</p>
  </div>
  <div class="product-image">
    <img src={slide4} alt="Product four Image"/>
  </div>
</div>

  <div class="product-row">

    <div class="product-content animate__animated animate__fadeInLeft">
      <h3>Delhi: 75% Efficiency, 0.7 Lakh cu-m/day, 15 Meter Range</h3>
      <p>Known for its advanced features and user-friendly interface, the Delhi model offers a perfect balance of functionality and ease of use. With a daily capacity of 0.7 lakh cubic meters and a 15 meter range, it is ideal for complex operations requiring high efficiency.</p>
    </div>
    <div class="product-image">
      <img src={slide3} alt="Product Three Image"/>
    </div>
  </div>

  <div class="product-row product-row-reverse">
    <div class="product-content animate__animated animate__fadeInRight">
      <h3>Faridabad: 80% Efficiency, 0.3 Lakh cu-m/day, 5 Meter Range</h3>
      <p>The Faridabad model offers exceptional reliability and durability. It is perfect for long-term use with a daily capacity of 0.3 lakh cubic meters and a 5 meter range, providing consistent output for your operations.</p>
    </div>
    <div class="product-image">
      <img src={slide2} alt="Product Two Image"/>
    </div>
  </div>

  <div class="product-row">
    <div class="product-content animate__animated animate__fadeInLeft">
      <h3>Meerut: 75% Efficiency, 0.5 Lakh cu-m/day, 10 Meter Range</h3>
      <p>Our Meerut model is designed to deliver high efficiency and performance. With a daily capacity of 0.5 lakh cubic meters and a range of 10 meters, it is equipped with the latest technology to ensure optimal results for your needs.</p>
    </div>
    <div class="product-image">
      <img src={slide1} alt="Product One Image"/>
    </div>
  </div>

  

  

 

  
</section>

<section className="features-section">
  <div className="container">
    <h3>Our Features</h3>
    <div className="row">
      {[
        { img: absorf, title: 'Absorbs Toxic Pollutants', text: 'Effectively removes harmful chemicals from the environment.' },
        { img: biode, title: '100% Natural and Biodegradable', text: 'Patented HBOG Technology - Sustainable AIR cleaning at scale.' },
        { img: oxygen, title: 'Produces Pure Oxygen', text: 'Patented technology - Generates clean oxygen, improving air quality.' },
        { img: grid, title: '100% Off-Grid Power', text: 'Operates independently of the traditional power grid.' },
        { img: cloudanalytics, title: '24/7 AI Cloud Analytics', text: 'Provides continuous data analysis with Patented autonomous operating system.' },
        { img: spacefacilities, title: 'For Urban spaces and facilities', text: 'Monolith design with advertisement screen - improves ROI' },
      ].map((feature, index) => (
        <div className="col-md-4 col-sm-6" key={index}>
          <div className="card feature-card">
            <div className="card-body">
              <div className="card-content">
                <img className="card-img-left" src={feature.img} alt={feature.title} />
                <div className="text-content">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <div className="contact-banner">
      <Link to="/contact" className="contact-link">
        <img src={contact} alt="Contact" className="contact-image" />
        <span>Contact</span>
      </Link>
    </div>



    <section className="testimonials-section">
  <div className="container">
    <h2>Awards and Recognition</h2>
    <div className="row">
      {[
        {img: startup2022, text: 'Beydest provided an exceptional service and I couldn\'t be happier with the results!', name: 'Startup India Award 2022' },
        { img: assam, text: 'Highly recommend Beydest for their professionalism and quality work.', name: 'NRL Assam 2022' },
       
        { img: indianoil, text: 'Highly recommend Beydest for their professionalism and quality work.', name: 'Indian Oil Startup Scheme 2019' },
        { img: cnbc, text: 'The team at Beydest is fantastic. They exceeded our expectations at every turn.', name: 'CNBC Young Turks 2022' },
        { img: president, text: 'Highly recommend Beydest for their professionalism and quality work.', name: 'President of India, Recogmition' },
        { img: smogathon, text: 'Highly recommend Beydest for their professionalism and quality work.', name: 'Smogathon - Poland 2018' },
      ].map((testimonial, index) => (
        <div className="col-md-4" key={index}>
          <div className="card testimonial-card">
            <img className="card-img-top" src={testimonial.img} alt={testimonial.name} />
            <div className="card-body">
              <p className="card-text">"{testimonial.text}"</p>
              <h5 className="card-title">{testimonial.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>

   

  </div>
</section>

    </div>
  );
}

export default Home;
