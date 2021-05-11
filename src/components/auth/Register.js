import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import loginP from "../../images/login.png";
import "./Auth.css";
import ErrorNotice from "../msg/ErrorNotice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState();

  const [displayName, setDisplayName] = useState();
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
        displayName,
      };

      await axios.post(
        "https://aplikacja-muzyczna.herokuapp.com/auth/",
        registerData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <div className="page">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={register}>
        <h2>Rejestracja</h2>
        <label htmlFor="register-email">Email</label>
        <input
          className="register"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="register-password">Haslo</label>
        <input
          className="register"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="register"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <label htmlFor="register-display-name">Nazwa uzytkownika</label>
        <input
          className="register"
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input type="submit" value="Zarejestruj" />
        <a className="reg" href="/login">
          Posiadasz już konto? <b>Zaloguj się</b>
        </a>
      </form>
      <aside>
        <img className="login" src={loginP} alt="postac autoryzacja" />
      </aside>
    </div>
  );
}

export default Register;
