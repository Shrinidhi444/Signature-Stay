import React from "react";
import { RiFacebookBoxLine, RiYoutubeLine, RiInstagramLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>Contact Us</h1>
        <p>Have questions or need assistance? We’re here to help.</p>
        <p>
          Reach out to us anytime and our team will be happy to assist you with
          your stay.
        </p>

        <div className="container">
          <img src="/about.jpg" alt="about" />

          <div className="content">
            <h3>Let's Connect</h3>

            <div>
              <p>Phone</p>
              <span>
                <a>+91 12345 67893</a>
              </span>
            </div>

            <div>
              <p>Email</p>
              <span>
                <a>
                  signaturestays@gmail.com
                </a>
              </span>
            </div>

            <div>
              <p>Address</p>
              <span>House No. 123, Sector A-1</span>
            </div>

            <ul className="socials">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiFacebookBoxLine />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramLine />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiYoutubeLine />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
