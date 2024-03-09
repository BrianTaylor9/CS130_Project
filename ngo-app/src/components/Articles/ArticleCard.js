import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

// Item component displays a single article's summary, including image, author, and title.
export default function Item({ card }) {

  const href = `/blog/${card.id}`
  return (
    <a href={href}>
    <div className="articleCard">
      <div className="img">
        <img src={card.src} alt="img" />
        <span className={card.field}>{card.field}</span>
      </div>
      <div className="details">
        <span className="date">{card.date}</span>
        <p>
          <AccountCircleSharpIcon
            color="rgb(230, 98, 59)"
            sx={{ pr: "2px", fontSize: "20px" }}
          />
          <span>{card.author}</span>
        </p>
      </div>

      <h2>{card.title}</h2>
      <p className="contents">{card.content.slice(0, 100)}...</p>

      <div className="action_btns">
        <div className="upvote">
          <ArrowUpwardOutlinedIcon className="upvote_btn" />
          <span>{card.vote}</span>
        </div>
        <button href={href} className="read">
          READ
        </button>
      </div>
    </div>
     </a>
  );
}
