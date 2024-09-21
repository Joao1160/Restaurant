import Navbar from "../components/Navbar";
import SpecialHeadline from "../components/SpecialHeadline";
import MenuItems from "../components/MenuComponents/MenuItems";
import '../css/menu.css'

function Menu() {
  const heading = {title : "menu page" , 
    desc : "Home/Menu"
  }
  return (
    <>
      <Navbar />
      <SpecialHeadline details={heading} />
      <MenuItems />
    </>
  );
}

export default Menu;
