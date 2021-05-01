import React, { useEffect, useContext } from "react";

import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Instructions from "./components/quiz/Instructions";
import MusicList from "./components/quiz/MusicList";
import Scores from "./components/quiz/ScoreDisplay";
import EntryQuiz from "./components/quiz/EntryQuiz";
import Admin from "./components/auth/Admin";
import AdminPanel from "./components/admin/AdminPanel";
import AdminReg from "./components/auth/AdminReg";
import AdminScores from "./components/admin/AdminScores";
import AdminScoreDisplay from "./components/admin/AdminScoreDisplay";
import AuthOptions from "./components/auth/AuthOptions";
import logo from "./images/logo.png";

import "./App.css";
import AdminCourse from "./components/admin/AdminCourse";
import CourseMusicMap from "./components/admin/CourseMusicMap";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  //   const history = useHistory();
  //   useEffect(() => {
  //     if (loggedIn === false) history.push("/login");
  //   });

  //mongodb+srv://kierzkowska:kierzkowska@cluster0.dmels.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* {loggedIn === false && (
            <> */}
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* </>
          )}
          {loggedIn === true && (
            <> */}
          <Route path="/admin" component={Admin} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/adminRegister" component={AdminReg} />
          <Route path="/adminScores" component={AdminScores} />
          <Route path="/score/:user_id" component={AdminScoreDisplay} />
          <Route path="/adminCreateCourse" component={CourseMusicMap} />
          <Route path="/adminquiz" component={AdminCourse} />

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/musiclist" component={MusicList} />
          <Route path="/entryquiz" component={EntryQuiz} />
          <Route path="/scores" component={Scores} />
          {/* </>
          )} */}
        </Switch>
      </div>
      <div className="logo">
        <img src={logo} alt="logo aplikacji" />
        <p>Classical music App</p>
      </div>
    </BrowserRouter>
  );
}

export default Router;
