import React from "react";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

// LogisticsMailTo creates a 'mailto:' link with optional subject and body
const LogisticsMailTo = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a className="donateBtn" href={`mailto:${email}${params}`}>
      {children}
    </a>
  );
};

// The LogisticDesc component displays detailed information about a specific logistics activity,
// including requirements and options to contact the organization via email or call.
export default function LogisticDesc({ card }) {
  const LogisticsMailTemplate = {
    email: card.organization.email,
    subject: `Logistics Support | LOGISTICS ID: ${card.id} | ORGANIZATION : ${card.organization.name}`,
    body: ``,
  };

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
        <Button variant="contained" href="#" className="donateBtn">
          <CallIcon sx={{ fontSize: "23px", pr: "5px", pt: "5px" }} />
          <span className="txt">CONTACT</span>
        </Button>

        {/* <Button variant="contained" href="#" className="donateBtn">
          <EmailIcon sx={{ fontSize: "23px", pr: "5px", pt: "5px" }} />
          <span className="txt">MAIL</span>
        </Button> */}
        <LogisticsMailTo
          email={LogisticsMailTemplate.email}
          subject={LogisticsMailTemplate.subject}
          body={LogisticsMailTemplate.body}
        >
          <EmailIcon sx={{ fontSize: "23px", pr: "5px", pt: "8px" }} />
          <span className="txt txt2">Email</span>
        </LogisticsMailTo>

        <Button variant="contained" href="#" className="donateBtn">
          <FavoriteIcon sx={{ fontSize: "23px", pr: "5px", pt: "5px" }} />
          <span className="txt">SUPPORT</span>
        </Button>
      </div>
    </>
  );
}
