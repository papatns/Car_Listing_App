import React from "react";
import "./header.css";
import SignIcon from "../../assets/Sign-in.png"

const header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_wrapper">
          <div className="navbar">
            <div>CAR LISTING</div>
            <div className="heading2">CAR LISTING</div>
            <div className="signin">
              <div className=".logo">
                <figure>
                  <img src={SignIcon}/>
                  <figcaption>SIGN IN</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
