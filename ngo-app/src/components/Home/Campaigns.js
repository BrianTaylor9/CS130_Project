import React from "react";
import "../../styles/home.css";
import { Carousel } from "@trendyol-js/react-carousel";
import Item from "../Campaign/CampaginCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// DATA
import { campaigns } from "../../data/data";

const LeftArrow = () => {
  return (
    <h1 className="arrows">
      <ArrowBackIosNewIcon fontSize="25px" />
    </h1>
  );
};
const RightArrow = () => {
  return (
    <h1 className="arrows">
      <ArrowForwardIosIcon fontSize="25px" />
    </h1>
  );
};
export default function Campaigns() {
  return (
    <>
      <div className="items campaign">
        <div className="upper"></div>
        <p>Help the people</p>
        <h1 className="header featured">Featured Campaigns</h1>

        <div className="campaignGrid">
          <Carousel
            infinite={true}
            responsive={true}
            transition={0.5}
            show={3}
            slide={1}
            swiping={true}
            useArrowKeys={true}
            rightArrow={<RightArrow />}
            leftArrow={<LeftArrow />}
          >
            {/* {campaigns.map((card) => (
              <Item card={card} />
            ))} */}
            <Item card={campaigns[0]} />
            <Item card={campaigns[1]} />
            <Item card={campaigns[2]} />
            <Item card={campaigns[3]} />
          </Carousel>
        </div>
      </div>
    </>
  );
}
