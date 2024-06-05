import React, { useState } from 'react';
import axios from 'axios';
import './contactForm.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    contactNumber: '',
    message: '',
    services: [],
    installation_area: 'Indoor',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          services: [...formData.services, value],
        });
      } else {
        setFormData({
          ...formData,
          services: formData.services.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://beydestsite.onrender.com/api/var/contact', formData)
      .then((response) => {
        toast.success('Form submitted successfully!', {
          position: window.innerWidth <= 768 ? "bottom-center" : "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate('/');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        toast.error('Error submitting form. Please try again.', {
          position: window.innerWidth <= 768 ? "bottom-center" : "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title animate__animated animate__fadeInDown">Get in Touch</h1>
        <p className="contact-subtitle animate__animated animate__fadeInUp">We'd love to hear from you</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
       <div className="form-group">
         <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
         <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
       </div>
      <div className="form-group">
         <label htmlFor="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          </div>
        <div className="form-group">
                      <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
         </div>
       <div className="form-group">
        <label htmlFor="contactNumber">Contact Number</label>
         <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
      </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
         <label>Services</label>
           <div>
             <label htmlFor="service1">
              <input
                  type="checkbox"
                  id="service1"
                  name="services"
                  value="For Retail Outlets"
                  checked={formData.services.includes('For Retail Outlets')}
                  onChange={handleChange}
                />
                For Retail Outlets
              </label>
            </div>
            <div>
              <label htmlFor="service2">
                <input
                  type="checkbox"
                  id="service2"
                  name="services"
                  value="For Refineries/Facilities"
                  checked={formData.services.includes('For Refineries/Facilities')}
                  onChange={handleChange}
                />
                For Refineries/Facilities
              </label>
            </div>
            <div>
              <label htmlFor="service3">
                <input
                  type="checkbox"
                  id="service3"
                  name="services"
                  value="For Residential Societies"
                  checked={formData.services.includes('For Residential Societies')}
                  onChange={handleChange}
                />
                For Residential Societies
              </label>
            </div>
            <div>
              <label htmlFor="service4">
                <input
                  type="checkbox"
                  id="service4"
                  name="services"
                  value="Hospitality"
                  checked={formData.services.includes('Hospitality')}
                  onChange={handleChange}
                />
                Hospitality
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="installation_area">Installation Area</label>
            <select id="installation_area" name="installation_area" value={formData.installation_area} onChange={handleChange}>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Both">Both</option>
            </select>
          </div>
          
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <ToastContainer />
      <ContactForm />
    </div>
  );
};

export default ContactPage;

















