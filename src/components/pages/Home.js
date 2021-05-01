import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Home.css";
import picture from "../../images/jazz.png";

export default function Home() {
  const { loggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn === false) history.push("/login");
  });

  return (
    <div className="center">
      <main>
        <h1>Rozpoznaj i trenuj utwory muzyki poważnej i jazzowej</h1>
        <div className="bg">
          <div className="write">
            <p>W naszej bazie znajdują się utwory wykonawców takich jak:</p>
            <p>Jan Sebastian Bach</p>
            <p>Fryderyk Chopin</p>
            <p>i wiele innych.</p>
            <p>Przejrzyj utwory już teraz, a następnie sprawdż swoją wiedzę!</p>
            <Link to="/musiclist" className="button">
              Przeglądaj
            </Link>
          </div>
        </div>
      </main>
      <aside>
        <img className="muzycy" src={picture} alt="muzycy" />
      </aside>
    </div>
  );
}
