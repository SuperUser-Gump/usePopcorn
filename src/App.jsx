import { useCallback, useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";
import { useMovies } from "./hooks/useMovies.js";
import NavBar from "./components/NavBar.jsx";
import Search from "./components/Search.jsx";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import MovieList from "./components/MovieList.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import NumResult from "./components/NumResult.jsx";
import Loader from "./components/Loader.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  const handleCloseMovie = useCallback(() => setSelectedId(null), []);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  function handleAddToWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
      </NavBar>
      <Main>
        <Box header={<NumResult movies={movies} />}>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        {selectedId ? (
          <Box
            header={
              <button className="btn btn-back" onClick={handleCloseMovie}>
                &larr;
              </button>
            }
          >
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddToWatched}
              watched={watched}
            />
          </Box>
        ) : (
          <Box header={<WatchedSummary watched={watched} />}>
            <WatchedMoviesList
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          </Box>
        )}
      </Main>
    </>
  );
}
