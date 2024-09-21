import Navbar from "../components/Navbar";
import MainContact from "../components/ContactUsComponents/MainContact";
import SpecialHeadline from "../components/SpecialHeadline";

import '../css/contact-us.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactUs() {
  
  const heading = {title : "contact page" , 
    desc : "Home/contact"
  }
  return (
    <>
      <Navbar />
      <SpecialHeadline details={heading} />
      <MainContact />
    </>
  );
}

export default ContactUs;
