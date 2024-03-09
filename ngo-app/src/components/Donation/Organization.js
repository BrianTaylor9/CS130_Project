import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
// DATA
import {organization} from '../../data/data';

// The Organization component displays details of a specific organization.
export default function Organization({card}) {

    const org = organization[card.id] ;
    console.log(card)

  return (
    <>
      {/* <h1>Organization</h1> */}
      <div className="org">
        <div className="org_left">
          <img src={org.img} />
        </div>

        <div className="org_right">
          <p className="timestamp">CREATED {card.date}</p>
          <p className="label">Organizer:</p>
          <p className="val">{org.name}</p>
          <p className="org_info">
            <LabelImportantIcon
              className="icon"
              sx={{ pr: "5px", fontSize: "20px" }}
            />
            <span>{card.field}</span>
          </p>
          <p className="org_info">
            <LocationOnIcon
              className="icon"
              sx={{ pr: "5px", fontSize: "20px" }}
            />
            <span>{org.city}</span>
          </p>
        </div>
      </div>
    </>
  );
}
