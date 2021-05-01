import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./AdminPanel.css";


export default function AdminPanel() {
  const { loggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn===false) history.push("/admin");
  });

  return (
    <div className="centerA">
      <main>
        <h1>Wybierz z poniższych interesującą Cię opcje: </h1>
        <div className="buttons">
         

            <Link to="/adminRegister" className="buT">
              Zarejestruj nowego administratora
            </Link>
            <Link to="/adminCreateCourse" className="buT1">
              Stwórz kurs
            </Link>
            <Link to="/adminScores" className="buT2">
              Sprawdź wyniki użytkowników
            </Link>
        </div>
      </main>
    </div>
  );
}
