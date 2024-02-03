import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo-dhamyatra.png"
const Header = () => {
  const headerStyle = {
    maxHeight: "fit-content", // Adjust the maximum width as needed
  };
  const logoStyle = {
    width: "100px", // Adjust the maximum width as needed
    height: "100px",
  };
  const brandNameStyle = {
    fontSize: "30px",
    marginRight: "20px",
  };

  const socialMediaIconsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  const iconStyle = {
    fontSize: "40px", // Adjust the icon size as needed
    marginRight: "10px", // Adjust the margin between icons as needed
  };

  return (
    <header className="p-3 bg-dark text-white" style={headerStyle}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      
            <img
              src={Logo}
              alt="Logo"
              width="40"
              height="32"
              style={logoStyle}
            />
         
          <div style={brandNameStyle}>Shri Dham Yatra</div>

          {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul> */}

          <div className="col-md-7 text-end">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
              href="https://www.facebook.com/ShriDhamyatara"
            >
              {" "}
              <FaFacebook style={iconStyle} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
              href="https://www.instagram.com/shridhamyatra/?igsh=YWYwM2I1ZDdmOQ%3D%3D"
            >
              {" "}
              <IoLogoInstagram style={iconStyle} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
              href="https://www.youtube.com/@Shridham-yatra"
            >
              {" "}
              <FaYoutube style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
