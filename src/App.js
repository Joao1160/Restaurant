import Footer from "./components/Footer";
import "./css/normalize.css";
import "./css/style.css";
import "./css/mediaQuery.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";

function App() {
  
  const jQueryCode = () => {

    // Dropdown Effect
    $(document).ready(function () {
      $("nav .container .list").click(function () {
        $("nav .container .nav-content .links").fadeToggle();
      });
    });

    // Scroll JS
    $(window).scroll(function () {
      var windowOffset = $(this).scrollTop();

      if (windowOffset > 100) {
        $("nav.home-nav").css({
          backgroundColor: "white",
        });
      }

      if (windowOffset < 100) {
        $("nav.home-nav").css({
          backgroundColor: "#ffffff00",
        });
      }
    });
  };
  jQueryCode();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
