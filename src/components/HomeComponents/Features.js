import FeatureIcon1 from "../../images/icon1.png";
import FeatureIcon2 from "../../images/icon2.png";
import FeatureIcon3 from "../../images/icon3.png";
import FeatureIcon4 from "../../images/icon4.png";

function Features() {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="feature-item">
            <img className="feature-icon" src={FeatureIcon1} alt="icon" />
            <h2>100% swiss quality</h2>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              corrupti excepturi quos labore.
            </p>
            <a className="read-more" href="#">
              discover more
            </a>
          </div>
          <div className="feature-item">
            <img className="feature-icon" src={FeatureIcon2} alt="icon" />
            <h2>organic production</h2>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              corrupti excepturi quos labore.
            </p>
            <a className="read-more" href="#">
              discover more
            </a>
          </div>
          <div className="feature-item">
            <img className="feature-icon" src={FeatureIcon3} alt="icon" />
            <h2>food law certified</h2>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              corrupti excepturi quos labore.
            </p>
            <a className="read-more" href="#">
              discover more
            </a>
          </div>
          <div className="feature-item">
            <img className="feature-icon" src={FeatureIcon4} alt="icon" />
            <h2>food production</h2>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              corrupti excepturi quos labore.
            </p>
            <a className="read-more" href="#">
              discover more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
