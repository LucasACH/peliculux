import Header from "./components/Header/Header";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <MovieCarousel />
      <MoviesGrid />
    </div>
  );
}

export default App;
