import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function TestiCard({ card }) {
  return (
    <>
      <div key={card.id} className="testi_card">
        <div className="uppercard">
          <div className="icon">
            <FormatQuoteIcon style={{ fontSize: "40px" }} />
          </div>
          <div className="content">
            <p>{card.content.slice(0,145)}.</p>
          </div>
        </div>

        <div className="author">
          <div className="img">
            <img src={card.src} alt="" />
          </div>

          <div className="info">
            <h3>{card.name}</h3>
            <span>{card.position}</span>
          </div>
        </div>
      </div>
    </>
  );
}
