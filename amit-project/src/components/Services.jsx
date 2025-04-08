import React from "react";
import ServicesCol from "./ServicesCol";
import { services_data } from "../data";

const Services = () => {

    return (
        <section className="services">
            <div className="container">
                <h1>Services</h1>
                <div className="row">
                    {services_data.map((value, index) => {
                        return <ServicesCol
                
                            id={index + 1}
                            heading={value.heading}
                            img={value.img}
                            para={value.para}
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;