import react from "react"
import { TiTick } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";


const AboutUs = () => {
    return (
        <section className="about_us">
            <div className="container">
                <h1>About Us</h1>
                <div className="row">
                    <div className="col">
                        <div>
                            <img src="https://kasootait.com/img/about3.jpg" alt="" height="200px" width="100%" />
                            <img src="https://kasootait.com/img/about4.jpg" alt="" height="300px" width="100%" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h2>The most Popular IT & Digital Marketing Company in worldwide.</h2>
                            At Kasoota, we believe in the power of technology to transform businesses and enhance user experiences. With a focus on innovation and customer satisfaction, we offer a wide range of IT services, including web development, mobile app development, software solutions, and digital marketing strategies tailored to meet your specific needs.

                            <ul>
                                <li><FcApproval /><a href="">Strategy & Consulting</a></li>
                                <li><FcApproval /><a href="">Business Process</a></li>
                                <li><FcApproval /><a href="">Marketing Rules</a></li>
                                <li><FcApproval /><a href="">Promotions</a></li>
                            </ul>
                            <button>Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;