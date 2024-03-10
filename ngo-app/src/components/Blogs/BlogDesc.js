import React from "react";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShareIcon from "@mui/icons-material/Share";

/**
 * Displays the description and interactive elements for a blog post.
 * The component provides sharing functionality and displays the post's vote count.
 * 
 * @param {{ title: string, desc: string, vote: number }} card - An object containing the blog post details, including its title, description, and vote count.
 * @returns {React.ReactElement} - A React element representing the detailed view of a blog post, with options to share and vote.
 */
function BlogDesc({ card }) {
  return (
    <>
      <h1 className="header">{card.title}</h1>

      <div className="desc">
        {card.desc.split("\n").map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      <div className="action_btns">
        <Button variant="contained" href="#" className="donateBtn">
          <ShareIcon sx={{ fontSize: "23px", pr: "9px", pt: "5px" }} />
          <span className="txt">SHARE</span>
        </Button>

        <div className="upVote">
          <ArrowUpwardIcon
            className="upVoteBtn"
            sx={{ fontSize: "23px", pr: "9px", pt: "5px" }}
          />
          <span className="txt">{card.vote}</span>
        </div>
      </div>
    </>
  );
}

export default BlogDesc