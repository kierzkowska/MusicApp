import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import loginP from "../../images/login.png";
import ErrorNotice from "../msg/ErrorNotice";


function Admin() {
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

      await axios.post(
        "https://aplikacja-muzyczna.herokuapp.com/admin/loginA",
        loginData
      );
      await getLoggedIn();
      history.push("/adminPanel");
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
        <p className="welcome">PANEL ADMINISTRATORA</p>
        <h2>Zaloguj się</h2>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
         <label htmlFor="login-password">Hasło</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
          <input type="submit" value="Zaloguj się" />
      
      </form>
      <aside>
        <img className="login" src={loginP} alt="postac autoryzacja" />
      </aside>

    </div>
  );
}

export default Admin;