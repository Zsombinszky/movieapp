import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 bg-netflix-black bg-opacity-90 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between  items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link
            to={"/"}
            className="text-netflix-red font-bold text-2xl md:text-3xl hover:text-red-600 transition-colors"
          >
            MOVIEAPP
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6">
          <Link
            to={"/"}
            className="text-white hover:text-netflix-red transition-colors font-medium"
          >
            Home
          </Link>

          <Link
            to={"/favorites"}
            className="text-white hover:text-netflix-red transition-colors font-medium"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
