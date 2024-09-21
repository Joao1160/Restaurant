import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MenuDishImage1 from "../../images/menu-dish1.png";
import MenuDishImage2 from "../../images/menu-dish2.png";
import MenuDishImage3 from "../../images/s-dish3.png";
import MenuDishImage4 from "../../images/menu-dish4.png";
import MenuDishImage5 from "../../images/menu-dish5.png";
import MenuDishImage6 from "../../images/menu-dish6.png";
import MenuDishImage7 from "../../images/menu-dish7.png";
import MenuDishImage8 from "../../images/menu-dish8.png";

function MenuItems() {
  return (
    <>
      <section className="specials-menu">
        <div className="container">
          <div className="special-heading">
            <h3 className="highlight-headline">special menu</h3>
            <h2 className="heading">our specials menu</h2>
            <ul className="category">
              <li className="active">
                <a href="#">
                  <p>all categories</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>perch fish</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>lobster</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>shrimps</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>red crab</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-items">
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage1} alt="dish-image" />
              </div>
              <h3 className="title">grilled meet</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage2} alt="dish-image" />
              </div>
              <h3 className="title">chicken breasts</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage3} alt="dish-image" />
              </div>
              <h3 className="title">chicken & rice</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage4} alt="dish-image" />
              </div>
              <h3 className="title">grilled fish</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage5} alt="dish-image" />
              </div>
              <h3 className="title">BBQ ribs</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage6} alt="dish-image" />
              </div>
              <h3 className="title">mango smoothie</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage7} alt="dish-image" />
              </div>
              <h3 className="title">prok chops</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuDishImage8} alt="dish-image" />
              </div>
              <h3 className="title">sushi platter</h3>
              <div className="stars-icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="price"> $13.49 - $10.99 </span>
            </div>
          </div>
          <button className="btn-show-more">show more</button>
        </div>
      </section>
    </>
  );
}

export default MenuItems;
