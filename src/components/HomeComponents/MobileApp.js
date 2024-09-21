import PlayStore from "../../images/play-store.png";
import AppleStore from "../../images/apple.png";
import PhoneIcon1 from "../../images/app-1.png";
import PhoneIcon2 from "../../images/app-2.png";

function MobileApp() {
  return (
    <>
      <section className="mobile-app">
        <div className="container">
          <div className="mobile-app-content">
            <h2 className="title">simple way to order your food faster</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut
              accusamus at illum voluptatem impedit accusantium perferendis
              molestias, suscipit neque, quibusdam aperiam vel ipsum magni!
            </p>
            <div className="links">
              <img src={PlayStore} alt="play-store" />
              <img src={AppleStore} alt="apple" />
            </div>
            <div className="icons">
              <img src={PhoneIcon1} alt="app-image" />
              <img src={PhoneIcon2} alt="app-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileApp;
