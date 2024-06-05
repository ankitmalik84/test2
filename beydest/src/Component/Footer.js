import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [downloadType, setDownloadType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = downloadType === 'brochure'
        ? 'https://beydestsite.onrender.com/api/var/brochure'
        : 'https://beydestsite.onrender.com/api/var/casestudy';

      const response = await axios.post(url, formData);
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phoneNumber: ''
        });
        setShowModal(false);
        toast.success(`Check your email for the ${downloadType} download link!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  const openModal = (type) => {
    setDownloadType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <ToastContainer />
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/swatch">SwachhPawan</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get Links</h3>
          <ul>
            <li><a href='#' onClick={() => openModal('brochure')}>Download Brochure</a></li>
            <li><a href="#" onClick={() => openModal('casestudy')}>Download Case Study</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Beydest Pvt Ltd</p>
          <p>Meerut, Uttar Pradesh</p>
          <p>India-250001</p>
          <p>Email: pranjal@beydest.in</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link className="social-icon" to="https://www.facebook.com/beydest">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon" to="https://x.com/hashtag/Beydest?t=6hp_AZaJYXE3g6adQksx9Q&s=08">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon" to="https://www.instagram.com/beydest_india/?hl=en">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon" to="https://www.linkedin.com/company/14632013/admin/feed/posts/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link className="social-icon" to="https://www.youtube.com/@beydestindia9891">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} | All Rights Reserved | Beydest Private Limited</p>
      </div>
      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">For Download Please Fill This Form</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {loading && (
                <div className="loading-spinner">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                  <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
