import React from "react";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShareIcon from "@mui/icons-material/Share";export default function BlogDesc({ card }) {
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
