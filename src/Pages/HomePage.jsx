import React from 'react';
import '../Styles/HomePage.css';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../Components/Header';
import RadhaKrishna from "../assets/radhakrishna.jpeg"
// import RadhaKrishna from "src\assets\radhakrishna.jpeg"
const HomePage = () => {
  const handleCallClick = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  return (
    <>
      <div className="containser" >
      <Header />
        <div className="row">
          <div className="col-md-6 order-md-2">
        
          <img src={RadhaKrishna} alt="" height="auto" width="100%" style={{ maxWidth: '100%' }} />


          </div>
          <div className="col-md-6 order-md-1">
            <div className="error-template">
              <h1>:) Oops!</h1>
              <h2>Temporarily down for maintenance</h2>
              <h1>We’ll be back soon!</h1>
              <div>
                <p>
                  Sorry for the inconvenience but we’re performing some maintenance at the moment.
                  We’ll be back online shortly!
                </p>
                <p>— The Shri Dham Yatra Team</p>
              </div>
              <div className="error-actions">
                <a href="https://wa.me/918918126865" className="btn btn-success btn-lg">
                  <FaWhatsapp /> +91 8918126865
                </a>
              </div>
              <button
                onClick={() => handleCallClick('+91 8918126865')}
                type="button"
                className="btn btn-secondary"
                style={{ marginBottom: '26px' }}
              >
                📞 +91 8918126865
              </button>
              <div style={{ fontSize: '18px' }}>
                <span style={{ fontWeight: 'bold' }}>Address:</span> 21, Dhruv Singh Colony,
                Rahargora Rd, Dhaiya, Dhanbad, Jharkhand 826004
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
