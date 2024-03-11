import React from "react";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * Displays a campaign card with details and a progress bar.
 * 
 * This component visualizes a single campaign, including its title, description, 
 * fundraising progress, and an optional button to navigate to the donation page.
 * The progress bar's theme changes based on the campaign's field.
 *
 * @param {{ card: { id: string, src: string, field: string, title: string, content: string, collected: number, goal: number }, displayBtn: boolean }} props - The properties passed to the component.
 * @param {Object} props.card - The campaign data to be displayed.
 * @param {string} props.card.id - The unique identifier of the campaign.
 * @param {string} props.card.src - The source URL of the campaign's image.
 * @param {string} props.card.field - The campaign's category, which determines the progress bar's theme.
 * @param {string} props.card.title - The title of the campaign.
 * @param {string} props.card.content - The description of the campaign.
 * @param {number} props.card.collected - The amount collected for the campaign so far.
 * @param {number} props.card.goal - The campaign's fundraising goal.
 * @param {boolean} props.displayBtn - Flag indicating whether the donation button should be displayed.
 * 
 * @returns {React.ReactElement} The campaign card component.
 */
function Item({ card, displayBtn  }) {
  
  // Define color themes for the progress bar based on the campaign field
  const theme = {
    medical: {
      color: "rgb(0, 217, 255)",
      trailColor: "white",
      symbol: " ",
    },
    education: {
      color: "rgb(255, 162, 49)",
      trailColor: "white",
      symbol: " ",
    },
    environment: {
      trailColor: "white",
      color: "rgb(4, 199, 118)",
      symbol: " ",
    },
    gender: {
      color: "rgb(199, 4, 140)",
      trailColor: "white",
      symbol: " ",
    },
  };

  const href = `/donate-now/${card.id}`;
  return (
    <a href={href} >
      <div className="campaignCard">
        <div className="img">
          <img src={card.src} alt="img" />
          <span className={card.field}>{card.field}</span>
        </div>

        <h2>{card.title}</h2>
        <p>{card.content}</p>
        <div className="lowershade">
          <div className={displayBtn ? "scroll" : "scroll no_btn"}>
            <div className="bar">
              <Progress
                theme={theme}
                width={100}
                percent={(card.collected / card.goal) * 100}
                status={card.field}
              />
            </div>

            <p className="start">
              ₹{card.collected} <span> Raised</span>
            </p>
            <p className="end">
              ₹{card.goal} <span> Goal</span>
            </p>
          </div>
          {displayBtn && (
            <Button variant="contained" href={href} className="donateBtn">
              <FavoriteIcon sx={{ fontSize: "19px", pr: "5px" }} />
              <span className="txt">DONATE</span>
            </Button>
          )}
        </div>
      </div>
    </a>
  );
}

export default Item