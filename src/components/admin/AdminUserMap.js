import React from "react";
import "./AdminScores.css";
import { Link } from "react-router-dom";


const AdminUserMap = ({ users }) => {

  return (
    <ul className="user-table">
      {users.map((user) => (
        <li className="line-user" key={user._id}>
          <div className="list-section">
            <p className="user-p">Użytkownik: {user.email} </p>
            <Link to={`/score/${user._id}`} className="buttonScore">
              Sprawdź wyniki
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdminUserMap;
