import React from "react";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";

const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container_1">
            <h3>Let's connect</h3>

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
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiYoutubeLine />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubLine />
                </a>
              </li>
            </ul>
          </div>

          <div className="container_2">
            <h3>We'd love to hear from you</h3>

            <form>
              <div>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
              </div>

              <textarea rows="4" placeholder="Your Message..." />

              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
