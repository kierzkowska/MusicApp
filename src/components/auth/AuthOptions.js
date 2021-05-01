import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./AuthOptions.css";
function AuthOptions() {
  const { loggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await loggedIn;
    history.push("/login");
    window.location.reload();
  }

  const register = () => history.push("/register");
  const login = () => history.push("/login");

  return (
    <nav className="auth-options">
      {loggedIn === false && (
        <>
          <button classname="auth-options" onClick={register}>
            Zarejestruj się{" "}
          </button>
          <button classname="auth-options" onClick={login}>
            | Zaloguj się
          </button>
        </>
      )}
      {loggedIn === true && <button onClick={logOut}>Wyloguj się</button>}
    </nav>
  );
}

export default AuthOptions;
