import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MovieDetails from "./components/MovieDetails/MovieDetails";

import { FilterDrawerProvider } from "./context/FilterDrawerContext";

import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <FilterDrawerProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/movie/:movie_id">
            <MovieDetails />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </FilterDrawerProvider>
  );
}

export default App;
