import Navbar from "../components/Navbar";
import '../css/About-us.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpecialHeadline from "../components/SpecialHeadline";

import FirstSection from "../components/AboutUsComponents/FirstSection";
import FirstAnnouncement from "../components/AboutUsComponents/FirstAnnouncement";
import TeamMember from "../components/AboutUsComponents/TeamMember";
import SecondAnnouncement from "../components/AboutUsComponents/SecondAnnouncement";
function About() {
  
  const heading = {title : "about page" , 
    desc : "Home/about"
  }
  return (
    <>
      <Navbar />
      {/* about us start */}
      <div class="About-us">
        <SpecialHeadline details={heading} />


        <FirstSection />

        <FirstAnnouncement />

        <TeamMember />
        
        <SecondAnnouncement/>
      </div >
      {/* about us end */}
      {/* <Footer /> */}
    </>
  );
}

export default About;
