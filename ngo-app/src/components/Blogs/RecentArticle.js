import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from 'react'

/**
 * Renders a preview of a recent article including its image, publication date, and title.
 * It links to the full article for users to read more.
 *
 * @param {{ id: string, src: string, date: string, title: string }} card - An object containing the details of the article.
 * @returns {React.ReactElement} - A React element representing a brief preview of a recent article.
 */
function RecentArticle({card}) {

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

export default RecentArticle