import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


function ChechOut() {
  return (
    <>
      <div className="checkout">
        <div className="container">
          <div className="checkout-content">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2 className="checkout-title">
              We Have Excellence Of Quality Japanese Food
            </h2>
            <h6 className="checkout-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolorem aperiam pariatur fugit ratione dicta ipsum
            </h6>
          </div>
          <div className="checkout-details">
            <div className="special-heading">
              <h3 className="highlight-headline">opening times</h3>
              <h2 className="heading">check availabilty</h2>
            </div>
            <div className="timetable">
              <div className="deadline">
                <p className="day">Sunday to Tuseday</p>
                <span className="time">09:00 - 06:30</span>
              </div>
              <div className="deadline">
                <p className="day">Sunday to Tuseday</p>
                <span className="time">09:00 - 06:30</span>
              </div>
              <div className="deadline">
                <p className="day">Sunday to Tuseday</p>
                <span className="time">09:00 - 06:30</span>
              </div>
              <div className="deadline">
                <p className="day">Sunday to Tuseday</p>
                <span className="time">09:00 - 06:30</span>
              </div>
              <div className="deadline">
                <p className="day">Sunday to Tuseday</p>
                <span className="time">09:00 - 06:30</span>
              </div>
            </div>
            <div className="subscribeFooter">
              <h4 className="title">Call Us Now</h4>
              <span>+99999-989898</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChechOut;
