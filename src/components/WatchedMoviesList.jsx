import React from "react";
import WatchedMovie from "./WatchedMovie.jsx";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <div className="box-content">
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
