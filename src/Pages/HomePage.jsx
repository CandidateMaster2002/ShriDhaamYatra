import React from 'react';
import '../Styles/HomePage.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { FaWhatsapp } from "react-icons/fa";
import Header from '../Components/Header';
const HomePage = () => {

   


    const handleCallClick = (phoneNumber) => {
      const telUrl = `tel:${phoneNumber}`;
      window.location.href = telUrl;
    };


  return (
    <>
<Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="error-template">
            <h1>:) Oops!</h1>
            <h2>Temporarily down for maintenance</h2>
            <h1>We’ll be back soon!</h1>
            <div>
              <p>Sorry for the inconvenience but we’re performing some maintenance at the moment. We’ll be back online shortly!</p>
              <p>— The Shri Dham Yatra Team</p>
            </div>
            <div className="error-actions">
              <a href="https://wa.me/918918126865" style={{ marginTop: '10px' }} className="btn btn-success btn-lg">
                <span className="glyphicon glyphicon-home"></span><FaWhatsapp /> +91 8918126865
              </a>
            </div>

            <button onClick={() => handleCallClick("+91 8918126865")} type="button" class="btn btn-secondary" style={{ marginBottom:'26px' , }} >📞 +91 8918126865 </button>


            <div   >
        
      </div>
            <div style={{fontSize:'18px'}}>
            <span style={{ fontWeight: 'bolder' }}>Address:</span> 21, Dhruv Singh Colony, Rahargora Rd, Dhaiya, Dhanbad, Jharkhand 826004
                </div>
          </div>
        </div>
        <div className="col-md-6">
      <svg className="svg-box" width="380px" height="500px" viewBox="0 0 837 1045" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
          {/* Replace the placeholder comment with the image */}
          <image href="src\assets\radhakrishna.jpeg" width="100%" height="100%" />
        </g>
      </svg>
    </div>
      </div>
    </div>
            </>
  );
}

export default HomePage;
