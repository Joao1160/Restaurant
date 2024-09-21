import { Link } from "react-router-dom";
import NewCardImage1 from "../../images/new-restaurant.jpg";
import NewCardImage2 from "../../images/greek-yogurt.jpg";
import NewCardImage3 from "../../images/pizza.jpg";
import '../../css/blog.css'

function LatestBlogs() {
  return (
    <>
      <section className="latest-news">
        {/* <!-- Blog Title Start --> */}
        <h3 className="news-blog">News & Blog</h3>
        <h2>Latest News</h2>
        {/* <!-- Blog Title End --> */}

        {/* <!-- News grid start --> */}
        <div className="news-grid">
          <div className="container">
            <div className="news-card">
              <img src={NewCardImage1} alt="New Restaurant Town" />
              <div className="card-content">
                <h3>New Restaurant Town Our Pie Award To Contract</h3>
                <p>
                  Drive your business and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Aug 1, 2023</p>
                  <Link to={"/BlogDetails"} >Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={NewCardImage2} alt="Greek yogurt breakfast bowls" />
              <div className="card-content">
                <h3>Greek yogurt breakfast bowls Pie Award Contract</h3>
                <p>
                  Drive your business and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Jun 14, 2023</p>
                  <Link to={"/BlogDetails"} >Read More</Link>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img
                src={NewCardImage3}
                alt="Authentic Italian Margherita Pizza"
              />
              <div className="card-content">
                <h3>Make Authentic Italian Margherita Pizza at Home</h3>
                <p>
                  Learn how to make and manage risks with a global industry
                  leader.
                </p>
                <div className="card-footer">
                  <p className="date">Sep 5, 2023</p>
                  <Link to={"/BlogDetails"} >Read More</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Centered Show More button --> */}
          <div className="show-more-container">
            <button className="show-more">Show More</button>
          </div>
        </div>
        {/* <!-- News grid end --> */}
      </section>
    </>
  );
}

export default LatestBlogs;
