import React from "react";
import TestiSlider from "../Testimony/TestiSlider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import test1 from "../../assets/images/testi1.jpeg";
import test2 from "../../assets/images/test2.jpeg";

const LeftArrow = () => {
  return (
    <h1 className="testi_arrows">
      <ArrowBackIosNewIcon  />
    </h1>
  );
};
const RightArrow = () => {
  return (
    <h1 className="testi_arrows right">
      <ArrowForwardIosIcon  />
    </h1>
  );
};

export default function Testimony() {
  return (
    <>
      <div className="testimony">
        <div className="images">
          <div>
            <img src={test1} alt="" />
          </div>
          <div>
            <img src={test2} alt="" />
          </div>
          <div>
            <img src={test1} alt="" />
          </div>
          <div>
            <img src={test2} alt="" />
          </div>
          <div>
            <img src={test1} alt="" />
          </div>
        </div>

        <div className="testimony_box">
          <div className="testimony_txt">
            <p>OUR TESTIMONIALS</p>
            <h1>What They’re Talking About Company?</h1>
            {/* <a href="#">Explore</a> */}
          </div>

          <TestiSlider LeftArrow={LeftArrow} RightArrow={RightArrow} />
        </div>
      </div>
    </>
  );
}
