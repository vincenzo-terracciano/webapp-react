import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div className="container text-center my-5">
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            <p className="lead">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Go to home</Link>
        </div>
    )
}