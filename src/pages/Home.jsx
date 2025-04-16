import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            })

    }, [])

    return (
        <>
            {/* Jumbotron */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Discover, Review, and Share Your Favorite Films</h1>
                    <p className="col-md-8 fs-5">
                        Join a community of movie lovers. Rate films, write reviews, and find your next cinematic obsession. Write reviews, rate films, and see what others are saying. Let your voice be heard! Share your thoughts and shape the way people see movies.
                    </p>
                </div>
            </div>


            {/* Movies list */}
            <section className="movies my-5">
                <div className="container">
                    <div className="movies_list">
                        <div className="row">
                            {
                                movies.length > 0 ? (

                                    movies.map(movie => (
                                        <div className="col" key={`Movie - ${movie.id}`}>
                                            <div className="card h-100">
                                                <Link to={`/movies/${movie.id}`}>
                                                    <img src={`http://localhost:3000/${movie.image}`} alt={movie.title} className="card-img-top" />
                                                </Link>

                                                <div className="card-body">
                                                    <h3>{movie.title}</h3>
                                                    <p>{movie.director}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                ) : (
                                    <h4>No movies available</h4>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}