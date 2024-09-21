import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


function SecondAnnouncement() {
    return (
        <>
            <div className="annoncement2">
                <div className="blur">
                    <div className="container">
                        <div className="content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPlay} />

                            </div>
                            <h2 className="announce2Tag">We Have Excellence Of Quality Japanese Food</h2>
                            <h6 className="announce2Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem aperiam pariatur
                                fugit
                                ratione
                                dicta ipsum </h6>
                        </div>
                        <div className="subscribe">
                            <div className="container">
                                <div className="row subscribeHeader">
                                    <h6 className="title">Opening Times</h6>
                                    <h2 className="mainTitle">Check Availabilty</h2>
                                </div>
                                <div className="row eachDay">
                                    <div className="col-8 dayColumn">
                                        <p className="days">Sunday to Tuseday</p>
                                    </div>
                                    <div className="col-4 timeColumn">
                                        <p className="times">09:00 - 06:30</p>
                                    </div>
                                    <div className="w-100 break"></div>
                                    <div className="col-8 dayColumn">
                                        <p className="days">Sunday to Tuseday</p>
                                    </div>
                                    <div className="col-4 timeColumn">
                                        <p className="times">09:00 - 06:30</p>
                                    </div>
                                    <div className="w-100 break"></div>
                                    <div className="col-8 dayColumn">
                                        <p className="days">Sunday to Tuseday</p>
                                    </div>
                                    <div className="col-4 timeColumn">
                                        <p className="times">09:00 - 06:30</p>
                                    </div>
                                    <div className="w-100 break "></div>
                                    <div className="col-8 dayColumn">
                                        <p className="days">Sunday to Tuseday</p>
                                    </div>
                                    <div className="col-4 timeColumn">
                                        <p className="times">09:00 - 06:30</p>
                                    </div>
                                    <div className="w-100 break"></div>
                                    <div className="col-8 dayColumn">
                                        <p className="days">Sunday to Tuseday</p>
                                    </div>
                                    <div className="col-4 timeColumn">
                                        <p className="times">09:00 - 06:30</p>
                                    </div>
                                    <div className="w-100 break"></div>
                                </div>
                                <div className="row subscribeFooter">
                                    <h4 className="title">Call Us Now</h4>
                                    <h5 className="subscribenum">+99999-989898</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SecondAnnouncement