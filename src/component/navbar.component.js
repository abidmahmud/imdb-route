import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between p-2">
            <Link className="navbar-brand" to="/"> IMDb </Link>
            <Link className="navbar-brand" to="/movies">Movies </Link>
            <Link className="navbar-brand" to="/create-movie">Create Movie </Link>
            <Link className="navbar-brand" to="/sign-up">Sign Up</Link>
            <Link className="navbar-brand" to="/log-in">Log In</Link>
        </nav>
    );
}

export default Navbar;
