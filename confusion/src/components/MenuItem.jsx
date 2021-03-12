import React from "react";
import "../styles/MenuComponent.css";

const MenuItem = (props) => {
    console.log(props);
    return(
        <div className="menu-content">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 dish-img-container">
                    <div className="dish-img"><img src={props.image} alt="" className="rounded-circle"/></div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                    <div className="dish-content">
                        <h5 className="dish-title">{props.name}</h5>
                        <span className="dish-meta">{props.description}</span>
                        <div className="dish-price">
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;