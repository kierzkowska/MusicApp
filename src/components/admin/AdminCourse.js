import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function AdminCourse() {
  const history = useHistory();

  useEffect(() => {
    const fetchMusic = () => {
      axios.get("https://aplikacja-muzyczna.herokuapp.com/adminMusic/all").then((res) => {
        setMusic(shuffle(res.data));
        //shuffle do polosowania elementow
      });
    };
    fetchMusic();
  }, []);

  let [music, setMusic] = useState([]);

  function shuffle(arra1) {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      // wybieramy losowy index
      index = Math.floor(Math.random() * ctr);
      ctr--;
      // i zamieniamy z nim ostatni element
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [entry, setEntry] = useState("");
  const [entryT, setEntryT] = useState("");

  const handleOnChange = (event) => setEntry(event.target.value);
  const handleOnChanges = (event) => setEntryT(event.target.value);

  const check = () => {
    if (
      entry.toUpperCase() === music[currentQuestion].author.toUpperCase() &&
      entryT.toUpperCase() === music[currentQuestion].title.toUpperCase()
    ) {
      setScore(score + 2);
      toast("Brawo! oba pola zostały prawidłowo wprowadzone!");
    } else if (
      entry.toUpperCase() === music[currentQuestion].author.toUpperCase() ||
      entryT.toUpperCase() === music[currentQuestion].title.toUpperCase()
    ) {
      setScore(score + 1);

      toast("Jedno z pól zostało wypełnione prawidłowo!");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < music.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setEntry("");
    setEntryT("");
  };

  const activeMusic = music.map((sound, index) => {
    return (
      <div key={index}>
        {index === currentQuestion ? (
          <ReactPlayer controls url={sound.link} height="1.5em" width="23em" />
        ) : null}
      </div>
    );
  });

  let zmienna = score;

  const creScore = () => {
    try {
      const newScore = {
        scoreText: zmienna,
      };
      axios.post("https://aplikacja-muzyczna.herokuapp.com/score/", newScore);
      return history.push("/scores");
    } catch (err) {
      history.push("/musiclist");
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Twoj wynik:
          <label>
            {" "}
            <input
              className="input-score"
              type="text"
              value={zmienna}
              onChange={handleOnChange}
            />{" "}
          </label>
          z {music.length * 2}
          <div>
            <button className="save-score-btn" type="button" onClick={creScore}>
              Zapisz wynik
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <span>Rozpoznaj utwór nr {currentQuestion + 1}</span>
            <div className="question-text">{activeMusic}</div>
          </div>

          <div className="answer-section">
            <label className="nam" htmlFor="name">
              Autor:
              <input
                id="name"
                placeholder="Artist"
                onChange={handleOnChange}
                type="form"
                value={entry}
              />
              <br></br>
            </label>
            <label className="titl" htmlFor="title">
              Tytuł:
              <input
                id="title"
                placeholder="Title"
                onChange={handleOnChanges}
                type="form"
                value={entryT}
              />
            </label>

            <button className="nxtbt" onClick={check} type="submit">
              {" "}
              Następny utwór{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
