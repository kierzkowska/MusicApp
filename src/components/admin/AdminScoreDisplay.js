import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../quiz/Pagination";
import { useParams, Route } from "react-router-dom";

const Scores = ({ scores }) => {

  return (
    <ul className="score-table">
      {scores.map((score) => (
        <li className="line-score" key={score._id}>
          <p className="score-p">
            {" "}
            Użytkownik uzyskał {score.scoreText} punktów z 16 możliwych{" "}
          </p>
        </li>
      ))}
    </ul>
  );
};


const AdminScoreDisplay = () => {
  const [scores, setScores] = useState([]);
  const [urlID, setUrlID] = useState("");

  //strony
  const [currentPage, setCurrentPage] = useState(1);
  const [scoresPerPage] = useState(10);

  function GetIdUrl() {
    let { idUrl } = useParams();
    setUrlID(idUrl);

    useEffect(() => {
      axios.get("https://aplikacja-muzyczna.herokuapp.com/score/" + urlID).then((res) => {
        setScores(res.data);
      });
    }, []);

    return null;
  }
  // pobieranie obecnych wynikow
  const indexOfLastScore = currentPage * scoresPerPage;
  const indexOfFirstScore = indexOfLastScore - scoresPerPage;
  const currentScores = scores.slice(indexOfFirstScore, indexOfLastScore);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-score-disp">
      <h1 className="scoretitle">Osiągnięcia:</h1>
      <p className="numberOfCourses">Ilość wykonanych kursów: {scores.length}</p>
      <Route path="/score/:idUrl">
        <GetIdUrl />
      </Route>
      <Scores scores={currentScores} />
      <Pagination
        scoresPerPage={scoresPerPage}
        totalScores={scores.length}
        paginate={paginate}
      />
    </div>
  );
};

export default AdminScoreDisplay;
