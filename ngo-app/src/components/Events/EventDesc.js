import React from "react";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
export default function EventDesc({ card }) {
  return (
    <>
      <h1 className="header">{card.title}</h1>

      <div className="desc">
        {card.desc.split("\n").map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      <h2 className="header2">Requirements</h2>

      <div className="req">
        {card.requirements.split("\n").map((r, index) => (
          <p className="reqList" key={index}>
            <KeyboardArrowRightIcon
              sx={{ color: "darkgray", fontSize: "25px", pr: "5px", pt: "5px" }}
            />
            <span>{r}</span>
          </p>
        ))}
      </div>

      <div className="action_btns">
        <Button variant="contained" href="/login" className="donateBtn">
          <PersonAddAlt1Icon sx={{ fontSize: "23px", pr: "5px", pt: "5px" }} />
          <span className="txt">REGISTER</span>
        </Button>
      </div>
    </>
  );
}
