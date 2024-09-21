import '../../css/blogdetails.css'
import BlogDetailsImage from '../../images/food-image.jpg';
import PostBlogImage1 from '../../images/post1.jpg';
import PostBlogImage2 from '../../images/post2.jpg';
import PostBlogImage3 from '../../images/post3.jpg';

function BlogContent() {
  return (
    <>
      <div className="blog-details">
        <div className="container">
          <div className="main-content">
            <div className="blog-post">
              <img
                src={BlogDetailsImage}
                alt="Food Image"
                className="post-image"
              />
              <div className="post-details">
                <p className="post-date">Sep 5, 2023</p>
                <h2 className="post-title">
                  Make Authentic Italian Margherita Pizza at Home
                </h2>
                <p className="post-description">
                  Nourishing our bodies and souls, food transcends borders.
                  Culinary traditions tell stories of culture and history,
                  creating bridges between people. Yet, with this delight comes
                  responsibility. Choosing sustainable and healthy options
                  ensures a brighter future for ourselves and the planet.
                </p>
                <p className="post-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. rorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices.
                </p>
                <h3 className="post-title">Special Food Recipes for Special</h3>
                <p className="post-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. rorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices.
                </p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <h3 className="sidebar-title">Latest Post</h3>
            <ul className="latest-posts">
              <li>
                <img
                  src={PostBlogImage1}
                  alt="New Restaurant"
                  className="post-thumbnail"
                />
                <div>
                  <a href="#">New Restaurant Town Our Ple Award Contract</a>
                  <span className="post-date">Aug 1, 2023</span>
                </div>
              </li>
              <li>
                <img
                  src={PostBlogImage2}
                  alt="Greek Yogurt"
                  className="post-thumbnail"
                />
                <div>
                  <a href="#">
                    Greek yogurt breakfast bowls Ple Award Contract
                  </a>
                  <span className="post-date">Jun 14, 2023</span>
                </div>
              </li>
              <li>
                <img
                  src={PostBlogImage3}
                  alt="Margherita Pizza"
                  className="post-thumbnail"
                />
                <div>
                  <a href="#">
                    Make Authentic Italian Margherita Pizza at Home
                  </a>
                  <span className="post-date">Sep 5, 2023</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
