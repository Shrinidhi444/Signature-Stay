import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={isHomePage ? 'homePage_footer otherPage_footer' : "otherPage_footer"}>
      <div className="container footer-about">
        <h4>SIGNATURE STAYS</h4>
        <p>
          Experience comfort and luxury like never before. Signature Stays is committed to making your stay memorable.
        </p>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/termsandconditions"}>Terms & Conditions</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="container footer-contact">
        <h4>Connect with us</h4>
        <p>Phone: <a>+91 12345 67893</a></p>
        <p>Email: <a>signaturestays@gmail.com</a></p>
        <p>Address: House No. 123, Sector A-1</p>

        

        <p className="copyright">
          © {new Date().getFullYear()} Signature Stays. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
