import Logo from "../images/logo-white.png";
import Dish1 from "../images/s-dish8.jpg";
import Dish2 from "../images/s-dish2.jpg";
import Dish3 from "../images/s-dish5.webp";
import Dish4 from "../images/s-dish4.jpg";
import Dish5 from "../images/s-dish5.jpg";
import Dish6 from "../images/s-dish6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          {/* <!-- Footer Items Start --> */}
          <div className="footer-items">
            <div className="footer-item">
              <div className="logo">
                <img src={Logo} alt="logo-black-white" />
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                impedit?
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>2767 sunrise street, jhones ave 102, new york, USA</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>
                    info@food.com <br />
                    info@cook.com
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHeadset} />
                  <p>
                    +123 456 789 <br />
                    +889 876 543
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="heading">quick links</h3>
              <span className="short-line"></span>
              <ul>
                <li>
                  <a href="#"> about us</a>
                </li>
                <li>
                  <a href="#">menu</a>
                </li>
                <li>
                  <a href="#">blogs</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
                <li>
                  <a href="#">gallery</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="heading">instagram</h3>
              <span className="short-line"></span>
              <div className="pics">
                <img src={Dish1} alt="dish8" />
                <img src={Dish2} alt="dish2" />
                <img src={Dish3} alt="dish3" />
                <img src={Dish4} alt="dish4" />
                <img src={Dish5} alt="dish5" />
                <img src={Dish6} alt="dish6" />
              </div>
            </div>
            <div className="footer-item">
              <h3 className="heading">subscribe</h3>
              <span className="short-line"></span>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                delectus aliquid praesentium aliquam!
              </p>
              <div className="subscribe">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
                <input type="submit" name="submit" value="Subscribe" />
              </div>
              <ul className="icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Footer Items End --> */}
        </div>
        {/* <!-- Footer Last Term Start --> */}
        <div className="footer-last-term">
          <div className="container">
            <p className="text">
              &#169; Copyright Cafeu. 2024 all rights reserved
            </p>
          </div>
        </div>
        {/* <!-- Footer Last Term End --> */}
      </footer>
    </>
  );
}

export default Footer;
