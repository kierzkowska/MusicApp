import React from "react";
import { format } from "timeago.js";
import "./Scores.css";

const Scores = ({ scores }) => {
  let showGrade = (score) => {
    if (score >= 16) return "Gratulacje! 100%";
    else if (score > 14) return "Super!";
    else if (score > 12) return "Dobra robota!";
    else if (score > 10) return "Coraz lepiej!";
    else if (score > 8) return "Średni wynik";
    else if (score > 5) return "Trochę lepiej";
    else if (score > 2) return "Popraw się...";
    else return "Na prawdę?";
  };

  return (
    <ul className="score-table">
      {scores.map((score) => (
        <li className="line-score" key={score._id}>
          <p className="score-p">
            {" "}
            Uzyskałeś {score.scoreText} punktów z 16 możliwych{" "}
            <span className="score-span">{format(score.createdAt)}</span>
            <span className="score-span">{showGrade(score.scoreText)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Scores;
