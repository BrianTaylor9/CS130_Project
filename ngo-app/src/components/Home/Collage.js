import React from "react";
import "../../styles/home.css";
import "../../styles/events.css";
import pic1 from "../../assets/images/campaign1.jpeg";
import pic2 from "../../assets/images/campaign2.jpeg";
import pic3 from "../../assets/images/campaign3.jpeg";
import pic4 from "../../assets/images/campaign4.jpeg";
import pic5 from "../../assets/images/campaign5.jpeg";
import pic6 from "../../assets/images/bully.jpeg";

export default function Collage() {
  return (
    <>
      <div className="items collage">
        <h1 className="header">Our Gallery</h1>

        <div className="collageGrid">
          <div className="row">
            <div className="left half">
              <img src={pic6} alt="pic1" />
              <img src={pic2} alt="pic3" />
              <img src={pic4} alt="pic2" />
              <img src={pic3} alt="pic4" />
            </div>

            <div className="right full">
              <img src={pic1} alt="pic6" />
            </div>
          </div>

          <div className="row">
            <div className="right half">
              <img src={pic6} alt="pic1" />
              <img src={pic2} alt="pic3" />
              <img src={pic4} alt="pic2" />
              <img src={pic3} alt="pic4" />
            </div>

            <div className="left full">
              <img src={pic1} alt="pic6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
