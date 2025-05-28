import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import Favorites from "./pages/FAvorites";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
