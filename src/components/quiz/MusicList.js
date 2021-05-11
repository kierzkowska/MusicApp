import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Track from "./MusicMap";

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(4);
  //

  const getTracks = () => {
    axios.get("https://aplikacja-muzyczna.herokuapp.com/music/all").then((res) => {
      setTracks(res.data);
    });
  };

  useEffect(() => {
    getTracks();
  }, []);

  // pobieranie obecnych wynikow
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="musictitle">Spis utworów:</h1>
      <Track tracks={currentTracks} />

      <Pagination
        scoresPerPage={tracksPerPage}
        totalScores={tracks.length}
        paginate={paginate}
      />
      <footer>
        {" "}
        {/* react player licence  */}
        <p className="react-player-licence">Copyright © 2020 Pete Cook</p>
      </footer>
    </div>
  );
};

export default Music;
