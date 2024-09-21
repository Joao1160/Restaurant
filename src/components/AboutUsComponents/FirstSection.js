import experience from '../../images/exparience.png'
import icon7 from "../../images/icon7.png"


function FirstSection() {
    return (
        <>
            <div className="firstSection">
                <div className="container">
                    <div className="row p-5 g-4 mt-4 mb-4">
                        <div className="col-lg-6 col-md-12 experience">
                            <img src={experience} alt="experience-page" />
                        </div>
                        <div className="col-lg-6 col-md-12 ps-5 rightPart">
                            <h5 className="pt-5 title ">About Us</h5>
                            <h3 className="pb-3 subTitle">Why We Are The Best</h3>
                            <p className="pb-3 aboutUsDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus
                                architecto autem tempore ullam necessitatibus accusantium ex! Dolor vel et voluptate
                                aspernatur, necessitatibus explicabo cupiditate tempora porro! Magnam, a consequuntur!</p>
                            <div className="buffetSurvice">
                                <div className="icon me-3">
                                    <img src={icon7} alt="undefined" />
                                    {/* <i className="fa fa-utensils"></i> */}
                                </div>
                                <div className="details">
                                    <h5 className="detailTag">Buffet Survice</h5>
                                    <p className="detailDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit, amet consectetur
                                        adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="OnlineBooking">
                                <div className="icon me-3">
                                    <img src={icon7} alt="undefined" />
                                    {/* <!-- <i className="fa fa-mobile-screen-button"></i> --> */}
                                </div>
                                <div className="details">
                                    <h5 className="detailTag">Online Booking</h5>
                                    <p className="detailDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit, amet consectetur
                                        adipisicing elit.</p>
                                </div>
                            </div>
                            <button>About Us</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FirstSection