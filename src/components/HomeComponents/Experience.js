import { Link } from "react-router-dom";
import ExpariencePng from "../../images/exparience.png";
import SurviceIcon from "../../images/icon7.png";
import '../../css/About-us.css'

function Experience() {
  return (
    <>
      <div className="firstSection">
        <div className="container">
          <div className="row p-5 mt-4 mb-4">
            <div className="firstSection-image col-lg-6 col-md-12">
              <img src={ExpariencePng} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 ps-5 rightPart">
              <h5 className="pt-5 title">About Us</h5>
              <h3 className="pb-3">Why We Are The Best</h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                temporibus architecto autem tempore ullam necessitatibus
                accusantium ex! Dolor vel et voluptate aspernatur,
                necessitatibus explicabo cupiditate tempora porro! Magnam, a
                consequuntur!
              </p>
              <div className="buffetSurvice">
                <div className="icon me-3">
                  <img src={SurviceIcon} alt="undefined" />
                </div>
                <div className="details">
                  <h5>Buffet Survice</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit,
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="OnlineBooking">
                <div className="icon me-3">
                  <img src={SurviceIcon} alt="undefined" />
                </div>
                <div className="details">
                  <h5>Online Booking</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit,
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <button>
                <Link to={"/About"} >About Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
