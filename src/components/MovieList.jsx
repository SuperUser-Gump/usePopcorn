import React from "react";
import Movie from "./Movie.jsx";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="box-content">
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
