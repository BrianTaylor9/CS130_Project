import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from 'react'

// RecentArticle component displays a brief preview of a recent article.
export default function RecentArticle({card}) {

    const href = `/blog/${card.id}`
  return (
    <div className="recentArticle">
      <a href={href}>
        <div className="imgLeft">
          <img src={card.src} alt="" />
        </div>

        <div className="txtLeft">
          <h7>
            <AccessTimeIcon
              sx={{ fontSize: "17px", ml: "4px", mt: "2px", pr: "5px" }}
            />
            <span>{card.date}</span>
          </h7>
          <h6>{card.title}</h6>
        </div>
      </a>
    </div>
  );
}
