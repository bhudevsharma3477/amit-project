import React from "react";
import FooterLinks from "./FooterLinks";
import { footer_links } from "../data";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
//import { FaRegCopyright } from "react-icons/fa6";
//import { MdOutlineCopyright } from "react-icons/md";
//import { BiSolidCopyright } from "react-icons/bi";
import { FaCopyright } from "react-icons/fa";
import CopyRightInFooter from "./CopyrightInFooter";



const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="inner_col">
                            <h4>Newsletter</h4>
                            <p>Welcome to the Kasoota IT Solutions newsletter section! Here, you'll find our latest updates, insights, and innovations tailored to keep you ahead in the ever-evolving world of technology.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 second_col">
                        <div className="inner_col">
                            <h4>Explore</h4>
                            <ul>
                                {footer_links.map((val, id) => <FooterLinks value={val} key={id + 1} />)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="inner_col">

                            <h4>Contact Info</h4>
                            <address>
                                <a href="">
                                <FaLocationDot /> 104, Nangal Sirohi, Mahendergarh, Haryana (123028)
                                </a>
                            </address>
                            <a href="mailto:info@itkasoota.com"><IoMdMail /> info@itkasoota.com</a>
                            <a href="#"><FaPhone /> +91 87081 55158</a>
                            <a href="#"><FaPrint /> +91 95881 71731</a>
                            <div className="icon_div">
                                <a href="#"><FaFacebookF className="icons" /></a>
                                <a href="#">  <FaTwitter className="icons" /></a>
                                <a href="#"><IoLogoInstagram className="icons" /></a>
                                <a href="#"><FaLinkedinIn className="icons" /></a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6">
                        <div className="inner_col">
                            <h4>Kasoota IT Solutions</h4>

                            IT services & Digital Marketing Agency
                            At Kasoota, we believe in the power of technology to transform businesses and enhance user experiences. With a focus on innovation and customer satisfaction
                            <a href="#"><button>Explore More <FaLongArrowAltRight className="right_arrow_icon" /></button></a>

                        </div>

                    </div>
                </div>

            </div>
           <CopyRightInFooter />

        </footer>
    );
}

export default Footer;
