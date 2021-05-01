import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import loginP from "../../images/login.png";
import "./Auth.css";
import ErrorNotice from "../msg/ErrorNotice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
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
      <form className="form" onSubmit={login}>
        <p className="welcome">Witaj!</p>
        <h2>Zaloguj się</h2>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="login-password">Hasło</label>
        <input
          id="login-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" value="Zaloguj się" />
        <a className="reg" href="/register">
          Nie posiadasz konta? <b>Zarejestruj się</b>
        </a>
      </form>
      <div>
        <a className="admin" href="/admin">
          Panel administratora
        </a>
      </div>
      <aside>
        <img className="login" src={loginP} alt="postac autoryzacja" />
      </aside>
    </div>
  );
}

export default Login;
