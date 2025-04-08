import React from "react";
import FooterLinks from "./FooterLinks";
import {footer_link} from "../data";

const Footer = () => {
    return (
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <h4>Newsletter</h4>
                    <p>Welcome to the Kasoota IT Solutions newsletter section! Here, you'll find our latest updates, insights, and innovations tailored to keep you ahead in the ever-evolving world of technology.</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4>Explore</h4>
                    <ul>
                        {footer_link.map((values, index) => {
                            return <FooterLinks value={values} key={index + 1} />
                        })}

                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4>Contact Info</h4>
                    <address>
                        104, Nangal Sirohi, Mahendergarh, Haryana (123028)
                    </address>
                    <a href="mailto:info@itkasoota.com">info@itkasoota.com</a>
                    <a href="#">91 8708155158</a>
                    <a href="#">91 9588171731</a>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h4>Kasoota IT Solutions</h4>

                    IT services & Digital Marketing Agency
                    At Kasoota, we believe in the power of technology to transform businesses and enhance user experiences. With a focus on innovation and customer satisfaction


                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
