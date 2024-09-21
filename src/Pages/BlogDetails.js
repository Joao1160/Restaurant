import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogdetailsComponents/BlogContent";
import SpecialHeadline from "../components/SpecialHeadline";


function BlogDetails() {
  const heading = {title : "Blog Details page" , 
    desc : "Home/BlogDetails"
  }
  return (
    <>
      <Navbar />
      <SpecialHeadline details={heading} />
      <BlogContent/>
    </>
  );
}

export default BlogDetails;
