import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    faMapMarkerAlt,
    faEnvelope,
    faUser,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function MainContact() {
    return (
        <>
            <div className="section-two">
                <div className="container">
                    <form action="" className="form-content">
                        <h3>contact us</h3>
                        <p>Please get in touch with us</p>
                        <div className="inputs">
                            <div className="input-content">
                                <input type="text" placeholder="your name*" />
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="input-content">
                                <input type="text" placeholder="your Email*" />
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="input-content">
                                <input type="number" placeholder="your phone*" />
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div className="input-content">
                                <input type="text" placeholder="your location*" />
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                        </div>
                        <textarea name="" id="" placeholder="comment*"></textarea>
                        <button className="btn-submit" type="submit">send message</button>
                    </form>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9010466224945!2d90.39945251540782!3d23.77717658457909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzM4LjgiTiA5MMKwMjQnMTEuNiJF!5e0!3m2!1sen!2sbd!4v1633932914600!5m2!1sen!2sbd"
                            width="400"
                            height="300"
                            style={{ border: '0' }}
                            // style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MainContact;