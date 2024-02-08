import React from "react";
import Item from "./TestiCard";
import { testimony } from "../../data/data";
import { Carousel } from "@trendyol-js/react-carousel";
;


export default function TestiSlider({LeftArrow, RightArrow}) {
  return (
    <>
      <div className="testimonyGrid">
        <Carousel
          infinite={true}
          responsive={true}
          transition={0.5}
          show={2}
          slide={1}
          swiping={true}
          useArrowKeys={true}
          rightArrow={<RightArrow />}
          leftArrow={<LeftArrow />}
        >
          {testimony.map((card) => (
            <Item key={card.id} card={card} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
