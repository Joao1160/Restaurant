import Banner from "../../images/first-slider.png";

function Landing() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home-content">
            <span className="highlight">best in cafeu</span>
            <h1 className="headline">
              different <a href="#">spice</a> for a different taste
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minus libero ad itaque ab distinctio sit amet
              consectetur .
            </p>
            <div className="order">
              <button className="order-btn">Order now</button>
              <div className="watch">
                <span className="circle"></span>
                watch video
              </div>
            </div>
          </div>
          <div className="image">
            <img src={Banner} alt="banner" />
          </div>
          <div className="bolls">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
          <ul className="links-social">
            <li>
              <a href="">facebook</a>
            </li>
            <li>
              <a href="">twitter</a>
            </li>
            <li>
              <a href="">instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Landing;
