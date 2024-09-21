import Logo from "../images/logo.png";
import CallIcon from "../images/callIcon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Features from "../components/HomeComponents/Features";
import Experience from "../components/HomeComponents/Experience";
import SpecialMenu from "../components/HomeComponents/SpecialMenu";
import MobileApp from "../components/HomeComponents/MobileApp";
import CheckOut from "../components/HomeComponents/CheckOut";
import TeamMember from "../components/HomeComponents/TeamMember";
import LatestBlogs from "../components/HomeComponents/LatestBlogs";
import Landing from "../components/HomeComponents/Landing";

function Home() {
  return (
    <>
      {/* NavBar Start */}
      <nav className="home-nav" >
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo-image" />
          </div>
          <div className="nav-content">
            <FontAwesomeIcon className="list" icon={faBars} />

            <ul className="links">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/Menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/Blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/About"}>About Us</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/"}>Reservation</Link>
              </li>
            </ul>
            <div className="phone">
              <img src={CallIcon} alt="call-icon" />
              <a href="tel:+880123456789">+880 123 456 789</a>
            </div>
          </div>
        </div>
      </nav>
      {/* NavBar End */}
      <Landing/>
      <Features />
      <Experience />
      <SpecialMenu/>
      <MobileApp/>
      <CheckOut/>
      <TeamMember/>
      <LatestBlogs/>
    </>
  );
}

export default Home;
