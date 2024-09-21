import chef1 from "../../images/chef1.png"
import chef2 from "../../images/chef2.png"
import chef3 from "../../images/chef3.png"
function TeamMember() {
    return (
        <>
            <div className="container">
                <div className="TeamHeader">
                    <h3 className="title">Our Team</h3>
                    <h1 className="mainTitle"> Meet Our Team</h1>
                </div>
                <div className="TeamSection">
                    <div className="member">
                        <img src={chef1} className="card-img-top memberImage" alt="undefined" />
                        <div className=" details">
                            <h3 className="name">Cathy Anderson</h3>
                            <h6 className="jop">Food Excutive</h6>
                        </div>
                    </div>
                    <div className="member">
                        <img src={chef2} className="card-img-top memberImage" alt="undefined" />
                        <div className=" details">
                            <h3 className="name">Mike gemy</h3>
                            <h6 className="jop"> Excutive</h6>
                        </div>
                    </div>
                    <div className="member">
                        <img src={chef3} className="card-img-top memberImage" alt="undefined" />
                        <div className=" details">
                            <h3 className="name">Alex Dooley</h3>
                            <h6 className="jop">Cheif Excutive</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TeamMember