import Header from "./components/Header/Header";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import { DataProvider } from "./context/DataProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/about"></Route>
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
    </DataProvider>
  );
}

export default App;
