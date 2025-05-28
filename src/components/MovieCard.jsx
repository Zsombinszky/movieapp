import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useMovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleToggleFavorite = async (e) => {
    e.preventDefault();

    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="w-48 bg-netflix-black rounded overflow-hidden shadow-lg transition-transform hover:scale-105 hover:z-10">
      <div className="relative group">
        <img
          className="w-full h-64"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleToggleFavorite}
            className="bg-netflix-black bg-opacity-70 p-2 rounded-full cursor-pointer"
          >
            {favorite ? (
              <FaHeart className="text-netflix-red" size={15} />
            ) : (
              <FaRegHeart className="text-netflix-red" size={15} />
            )}
          </button>
        </div>
      </div>

      <div className="p-3">
        <Link to={`/movies/${movie.id}`}>
          <h3 className="text-white font-semibold truncate underline-offset-2 hover:underline ">
            {movie.title}
          </h3>
        </Link>
        <p className="text-netflix-gray text-sm">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
