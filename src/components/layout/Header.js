import React from "react";
import { Link } from "react-router-dom";
//import AuthContext from "../../context/AuthContext";
import "./Header.css";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
//    const { loggedIn } = useContext(AuthContext);

  return (
    <header id="header">
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="tlo"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1440 193.669L1404.85 171.221C1371.37 148.773 1302.73 154.055 1234.1 126.326C1165.46 97.2762 1096.83 86.7127 1028.19 119.724C959.558 154.055 890.923 183.105 822.289 183.105C753.654 183.105 683.346 102.558 614.711 102.558C546.077 102.558 477.442 183.105 408.807 188.387C340.173 193.669 271.538 126.326 202.904 119.724C134.269 114.442 65.6346 171.221 32.1543 200.271L-3 228V-11H32.1543C65.6346 -11 134.269 -11 202.904 -11C271.538 -11 340.173 -11 408.807 -11C477.442 -11 546.077 -11 614.711 -11C683.346 -11 753.654 -11 822.289 -11C890.923 -11 959.558 -11 1028.19 -11C1096.83 -11 1165.46 -11 1234.1 -11C1302.73 -11 1371.37 -11 1404.85 -11H1440V193.669Z"
            fill="#19849B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1440 193.669L1404.85 171.221C1371.37 148.773 1302.73 154.055 1234.1 126.326C1165.46 97.2762 1096.83 86.7127 1028.19 119.724C959.558 154.055 890.923 183.105 822.289 183.105C753.654 183.105 683.346 102.558 614.711 102.558C546.077 102.558 477.442 183.105 408.807 188.387C340.173 193.669 271.538 126.326 202.904 119.724C134.269 114.442 65.6346 171.221 32.1543 200.271L-3 228V-11H32.1543C65.6346 -11 134.269 -11 202.904 -11C271.538 -11 340.173 -11 408.807 -11C477.442 -11 546.077 -11 614.711 -11C683.346 -11 753.654 -11 822.289 -11C890.923 -11 959.558 -11 1028.19 -11C1096.83 -11 1165.46 -11 1234.1 -11C1302.73 -11 1371.37 -11 1404.85 -11H1440V193.669Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="718.5"
              y1="-11"
              x2="718.5"
              y2="228"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.671875" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="navbar">
        {/* napisy ktore zawsze na kazdym komponencie sa na gorze strony i po kliknieciu przekierowywuja */}
        <Link to="/">
          <p className="title1">Strona Główna</p>
        </Link>

        <Link to="/instructions">
          <p className="title">Quiz</p>
        </Link>

        <Link to="/scores">
          <p className="title">Wyniki</p>
        </Link>

        <Link to="/musiclist">
          <p className="title">Przegląd utworów</p>
        </Link>
      </div>

      {/* do napisow logowania zawsze na gorze strony */}
      <AuthOptions />
    </header>
  );
}
