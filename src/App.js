import Header from "./components/Header/Header";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import { DataProvider } from "./context/DataProvider";
import "./styles/App.css";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Header />
        <MovieCarousel />
        <MoviesGrid />
      </div>
    </DataProvider>
  );
}

export default App;
