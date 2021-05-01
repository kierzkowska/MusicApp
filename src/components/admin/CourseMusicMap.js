import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CreateCourse.css";
import axios from "axios";
import CreateCourse from "./CreateCourse";

function CourseMusicMap() {
  const history = useHistory();

  const [stateMusic, setMusicState] = useState([]);
  const [array, setArray] = useState([]);
  const [afterAr, setAfterAr] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);

  const RedirectCourse = () => {
    console.log(afterAr);
    axios.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((data) => {
      let musi = data.data;
      let i = 0;
      setAfterAr(
        musi.forEach((d) => {
          if (d._id === array[i]) {
            afterAr.push(d);
            i++;
          }
        })
      );
      try {
        for (let i = 0; i < afterAr.length; i++) {
          console.log(afterAr.length);
          const newMus = {
            title: afterAr[i].title,
            author: afterAr[i].author,
            link: afterAr[i].link,
          };

          axios.post("https://aplikacja-muzyczna.herokuapp.com/adminMusic/", newMus);
        }
        return history.push("/adminPanel");
      } catch (err) {
        data.status(500).json({ error: err.message });
      }
    });
  };

  const getAllMusic = () => {
    axios.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((data) => {
      let allMusic = data.data;

      setMusicState(
        allMusic.map((d) => {
          return {
            select: false,
            id: d._id,
            author: d.author,
            title: d.title,
          };
        })
      );
    });
  };

  const CheckedTracks = () => {
    try {
      axios
        .delete("https://aplikacja-muzyczna.herokuapp.com/adminMusic/delete")
        .then((res) => console.log(res.data));
    } catch (err) {
      console.log("blad");
    }

    let arrayids = [];
    stateMusic.forEach((d) => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    setArray(arrayids);
    console.log(arrayids);
  };

  return (
    <ul className="music-tab">
      <h1 className="text-tracks">Wybierz 8 utworów do utworzenia kursu</h1>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={(e) => {
              let value = e.target.checked;
              setMusicState(
                stateMusic.map((d) => {
                  d.select = value;
                  return d;
                })
              );
            }}
          />
        </th>

        <th scope="col">Autor</th>
        <th scope="col">Tytuł</th>
      </tr>
      <tbody>
        <CreateCourse
          stateCustomer={stateMusic}
          setCustomerState={setMusicState}
        />
      </tbody>

      <button
        className="btn-course"
        onClick={() => {
          CheckedTracks();
        }}
      >
        Zatwierdź wybór
      </button>
      <p className="stepone">Krok 1 </p>
      <button
        className="btn-course1"
        onClick={() => {
          RedirectCourse();
        }}
      >
        Utwórz kurs
      </button>
      <p className="steptwo">Krok 2 </p>
    </ul>
  );
}

export default CourseMusicMap;
