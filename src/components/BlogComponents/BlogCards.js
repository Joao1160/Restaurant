import BlogImage1 from "../../images/new-restaurant.jpg";
import BlogImage2 from "../../images/greek-yogurt.jpg";
import BlogImage3 from "../../images/pizza.jpg";
import BlogImage4 from "../../images/food-trends.jpg";
import BlogImage5 from "../../images/healthy-breakfast.jpg";
import BlogImage6 from "../../images/pasta.jpg";
import { Link } from "react-router-dom";

function BlogCards() {
  return (
    <>
      <section className="latest-news">
        <h3 className="news-blog">News & Blog</h3>
        <h2>Latest News</h2>
        <div className="news-grid">
          <div className="container">
            <div className="news-card">
              <img src={BlogImage1} alt="New Restaurant Town" />
              <div className="card-content">
                <h3>New Restaurant Town Our Pie Award Contract</h3>
                <p>
                  Drive your business and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Aug 1, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={BlogImage2} alt="Greek yogurt breakfast bowls" />
              <div className="card-content">
                <h3>Greek yogurt breakfast bowls Pie Award Contract</h3>
                <p>
                  Drive your business and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Jun 14, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={BlogImage3} alt="Authentic Italian Margherita Pizza" />
              <div className="card-content">
                <h3>Make Authentic Italian Margherita Pizza at Home</h3>
                <p>
                  Learn how to make and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Sep 5, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={BlogImage4} alt="New Food Trends" />
              <div className="card-content">
                <h3>Exploring New Food Trends in 2023</h3>
                <p>
                  Discover the latest food trends shaping the culinary world.
                </p>
                <div className="card-footer">
                  <p className="date">Jan 15, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={BlogImage5} alt="Healthy Breakfast Recipes" />
              <div className="card-content">
                <h3>Healthy Breakfast Recipes for a Great Start</h3>
                <p>Explore delicious and nutritious breakfast options.</p>
                <div className="card-footer">
                  <p className="date">Mar 22, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={BlogImage6} alt="Crafting Homemade Pasta" />
              <div className="card-content">
                <h3>The Art of Crafting Homemade Pasta</h3>
                <p>Learn how to make authentic Italian pasta from scratch.</p>
                <div className="card-footer">
                  <p className="date">May 9, 2023</p>
                  <Link to={"/BlogDetails"}>Read More</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="show-more-container">
            <button className="show-more">Show More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogCards;
