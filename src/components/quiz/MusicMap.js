import React from "react";
import "./MusicList.css";
import ReactPlayer from "react-player";

const MusicMap = ({ tracks }) => {

  return (
    <ul className="music-table">
      {tracks.map((track) => (
        <li className="line-music" key={track._id}>
          <div className="list-section">
            <p className="music-p">Autor: {track.author} </p>
            <p className="music-p">Tytuł: {track.title}</p>
            <div className="music-play">
              <ReactPlayer
                className="music-play"
                controls 
                url={track.link}
                height="3.2em"
                width="40em"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MusicMap;
