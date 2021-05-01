import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Instructions.css";

export default function Instructions() {
  const { loggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn===false) {
      history.push("/login");
    //   localStorage.clear();
    }
  });

  return (
    <div className="center">
      <main>
        <h1 className="wel-inst">Witaj!</h1>
        <div className="txt-inst">
          <p>Sprawdź swoją wiedzę z muzyki poważnej i jazzowej. </p>
          <p>Nasz Quiz zawiera możliwość rozpoznawania utworów</p>
          <p>
            muzycznych za pomocą bezpośredniego wprowadzenia wykonawcy i tytułu
          </p>
          <p>Wybierz rozgrywkę oraz sprawdż swoją wiedzę już teraz!</p>
        </div>
        <div className="box-inst">
          <div className="write-inst">
            <p>
              <span>Instrukcja: </span> Na górze ekranu pojawi się numer utworu
              oraz odtwarzacz muzyczny. Po kliknięciu przycisku play, muzyka
              zostanie odtworzona, a ty musisz odgadnąć jej wykonawcę oraz tytuł
              wpisując go w wyznaczone pola. Powodzenia !
            </p>
            <Link to="/entryquiz" className="button-inst">
              Quiz losowy
            </Link>
            <Link to="/adminquiz" className="button-instt">
              Quiz przygotowany przez administratora
            </Link>
          </div>
        </div>
       
      </main>
    </div>
  );
}
