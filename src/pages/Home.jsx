import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { IoSearch } from "react-icons/io5";
import { getPopularMovies, searchMovies } from "../services/api.js";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to load movies...");
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearchMovie = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-netflix-black p-8">
      {/* Header with search */}
      <div className="max-w-6xl mx-auto mb-8">
        <form onSubmit={handleSearchMovie}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 rounded bg-netflix-dark-gray text-white
             placeholder-netflix-light-gray focus:outline-none focus:ring-2 focus:ring-netflix-red"
          />
          <button className="absolute left-3 top-3.5 text-netflix-light-gray hover:text-white cursor-pointer">
            <IoSearch size={20} />
          </button>
        </form>
      </div>
      {/* Error */}
      {error && (
        <div className="text-netflix-red text-center mb-4">{error}</div>
      )}

      {/* Movie Grid */}
      {loading ? (
        <div className="text-center text-netflix-gray animate-pulse">
          Loading movies...
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
