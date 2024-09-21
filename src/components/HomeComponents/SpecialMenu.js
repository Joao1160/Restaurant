import CategoryIcon1 from "../../images/icon7.png";
import CategoryIcon2 from "../../images/icon1.png";
import CategoryIcon3 from "../../images/icon2.png";
import CategoryIcon4 from "../../images/icon3.png";
import CategoryIcon5 from "../../images/icon4.png";
import CategoryIcon6 from "../../images/icon5.png";
import CategoryIcon7 from "../../images/icon6.png";
import MenuImage1 from "../../images/menu-image1.jpg";
import MenuImage2 from "../../images/menu-image2.jpg";
import MenuImage3 from "../../images/menu-image3.jpg";
import MenuImage4 from "../../images/menu-image4.jpg";
import MenuImage5 from "../../images/menu-image5.jpg";
import MenuImage6 from "../../images/menu-image6.jpg";

function SpecialMenu() {
  return (
    <>
      <section className="menu">
        <div className="container">
          <div className="special-heading">
            <h3 className="highlight-headline">special menu</h3>
            <h2 className="heading">our specials menu</h2>
            <ul className="category">
              <li className="active">
                <a href="#">
                  <img src={CategoryIcon1} alt="icon" />
                  <p>all</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon2} alt="icon" />
                  <p>pizza</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon3} alt="icon" />
                  <p>asian</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon4} alt="icon" />
                  <p>burger</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon5} alt="icon" />
                  <p>salad</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon6} alt="icon" />
                  <p>bakery</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={CategoryIcon7} alt="icon" />
                  <p>drink</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-items">
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage1} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">margherita pizza</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage2} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">chicken alfredo</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage3} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">caesar salad</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage4} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">coleslaw</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage5} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">chocolate brownie</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuImage6} alt="dish-image" />
              </div>
              <div className="menu-info">
                <h3 className="title">vegatable stir fry</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae odio fugiat veniam.
                </p>
                <span className="price"> delivery fee : $10 </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default SpecialMenu;
