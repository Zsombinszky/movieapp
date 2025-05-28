import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useMovieContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-netflix-black pt-14 px-8 pb-8">
      <button
        className="mb-6 text-netflix-red hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto">
        {favorites.length > 0 ? (
          <>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Your Favorites
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {favorites.map((m) => (
                <MovieCard movie={m} key={m.id} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center mt-20">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              No favorites yet
            </h2>
            <p className="text-netflix-gray max-w-md mx-auto">
              Start adding movies to your favorites by clicking on the heart
              icon on movie cards
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
