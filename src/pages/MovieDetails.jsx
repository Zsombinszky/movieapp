import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../services/api.js";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieById(id);
        console.log(movieData);

        setMovie(movieData);
      } catch (error) {
        setError("Failed to load movie details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="text-netflix-gray text-center p-8">Loading ...</div>;
  }

  if (error) {
    return <div className="text-netflix-red text-center p-8">{error}</div>;
  }

  if (!movie?.id) {
    return (
      <div className="text-netflix-gray text-center p-8">Movie Not Found</div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      {/* Backdrop Section */}

      <div className="relative h-96">
        {movie.backdrop_path && (
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-netflix-black">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex gap-4 text-netflix-gray">
            <span>{movie.release_date?.split("-")[0] || "N/A"}</span>
            <span>
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                : "N/A"}
            </span>
            <span>⭐{movie.vote_average?.toFixed(1) || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-netflix-red hover:underline"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-netflix-gray mb-6">
              {movie.overview || "No overview available"}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Genres</h3>
                <p className="text-netflix-gray">
                  {movie.genres?.length > 0
                    ? movie.genres.map((g) => g.name).join(", ")
                    : "N/A"}
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Budget</h3>
                <p className="text-netflix-gray">
                  {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
