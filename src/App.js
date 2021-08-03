import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MovieCarousel from "./components/MovieCarousel";
import MoviesGrid from "./components/MoviesGrid";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SavedMovies from "./components/SavedMovies";

import { StateProvider } from "./context/StateContext";
import { MoviesProvider } from "./context/MoviesContext";
import { SavedMoviesProvider } from "./context/savedMovies";

import "./App.css";

function App() {
  return (
    <StateProvider>
      <MoviesProvider>
        <SavedMoviesProvider>
          <div className="app">
            <Router>
              <Header />
              <Switch>
                <Route path="/saved-movies">
                  <SavedMovies />
                </Route>
                <Route path="/movie/:movie_id">
                  <MovieDetails />
                </Route>
                <Route path="/">
                  <MovieCarousel />
                  <MoviesGrid />
                </Route>
              </Switch>
            </Router>
          </div>
        </SavedMoviesProvider>
      </MoviesProvider>
    </StateProvider>
  );
}

export default App;
