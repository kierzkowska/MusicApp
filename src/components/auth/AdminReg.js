import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import adminR from "../../images/adminR.png";
import ErrorNotice from "../msg/ErrorNotice";

function AdminReg() {
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

      await axios.post("http://localhost:5000/admin/registerA", registerData);
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
      <form className="form" onSubmit={register}>
      <h2>Zarejestruj Administratora</h2>
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
          placeholder="Potwierdz hasło"
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
      </form>
      <aside>
        <img className="login" src={adminR} alt="autoryzacja" />
      </aside>
    </div>
  );
}

export default AdminReg;
