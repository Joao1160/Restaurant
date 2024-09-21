import BlogCards from "../components/BlogComponents/BlogCards";
import SpecialHeadline from "../components/SpecialHeadline";
import Navbar from "../components/Navbar";
function Blog() {
  
  const heading = {title : "blog page" , 
    desc : "Home/blog"
  }
  return (
    <>
      <Navbar />
      <SpecialHeadline details={heading} />
      <BlogCards/>
    </>
  );
}

export default Blog;
