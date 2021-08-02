import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SavedMovies from "./components/SavedMovies";

import { StateProvider } from "./context/state";
import { PopularMoviesProvider } from "./context/popularMovies";
import { CarouselMoviesProvider } from "./context/carouselMovies";
import { SavedMoviesProvider } from "./context/savedMovies";

import "./styles/App.css";

function App() {
  return (
    <StateProvider>
      <PopularMoviesProvider>
        <CarouselMoviesProvider>
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
        </CarouselMoviesProvider>
      </PopularMoviesProvider>
    </StateProvider>
  );
}

export default App;
