import React from "react";
import "./Pagination.css";

const Pagination = ({ scoresPerPage, totalScores, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalScores / scoresPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
