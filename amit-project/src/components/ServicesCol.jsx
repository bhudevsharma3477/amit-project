import React from "react";

const ServicesCol = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 service_col" key={props.id}>
            <div>
                <img src={props.img} alt="" height="150px" width="100%" />
                <h5>{props.heading}</h5>
                <p>{props.para}</p>
                <button>Read More</button>
            </div>
        </div>
    );
}

export default ServicesCol;