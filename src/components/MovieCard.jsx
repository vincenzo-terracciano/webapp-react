import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    const { id, image, title, director } = movie

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/movies/${id}`}>
                    <img src={`http://localhost:3000/${image}`} alt={title} className="card-img-top" />
                </Link>

                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{director}</p>
                </div>
            </div>
        </div>
    )
}