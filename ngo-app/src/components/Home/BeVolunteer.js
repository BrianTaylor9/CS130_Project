import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../styles/home.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function () {
  return (
    <>
      <div className="volunteer">
        <div className="elem v_left">
          <h1>Become a Volunteer</h1>
          <p>
            There are many variations of passages of lore available but the
            majority have suffered alteration.
          </p>
          <a href="#">
            <GroupAddIcon />
            JOIN
          </a>
        </div>
        <div className="elem v_right">
          <h1>Help by Donating</h1>
          <p>
            There are many variations of passages of lore available but the
            majority have suffered alteration.
          </p>
          <a href="#">
            <FavoriteIcon />
            DONATE
          </a>
        </div>
      </div>
    </>
  );
}
