import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./Scores.css";
import Score from "./Scores";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const ScoreDisplay = () => {
  const [scores, setScores] = useState([]);
  //strony
  const [currentPage, setCurrentPage] = useState(1);
  const [scoresPerPage] = useState(10);
  const getScores = async () => {
    const res = await axios.get("http://localhost:5000/score/one");
    setScores(res.data.slice(0).reverse()); //slice reverse, zeby bylo od najnowszych
  };
  const { loggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn === false) history.push("/login");
    getScores();
  }, []);

  // pobieranie obecnych wynikow
  const indexOfLastScore = currentPage * scoresPerPage;
  const indexOfFirstScore = indexOfLastScore - scoresPerPage;
  const currentScores = scores.slice(indexOfFirstScore, indexOfLastScore);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-score-disp">
      <h1 className="scoretitle">Twoje osiągnięcia:</h1>

      <Score scores={currentScores} />

      <Pagination
        scoresPerPage={scoresPerPage}
        totalScores={scores.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ScoreDisplay;
