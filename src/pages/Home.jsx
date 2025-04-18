import { useState, useEffect, useContext } from "react"
import MovieCard from "../components/MovieCard";
import GlobalContext from "../contexts/GlobalContext";

export default function Home() {

    const [movies, setMovies] = useState([]);
    const { loading, setLoading } = useContext(GlobalContext)

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {/* Jumbotron */}
            <div className="p-5 mb-4 jumbotron rounded-3">
                <div className="container-fluid py-5">
                    <h2 className="display-5 fw-bold">Discover, Review, and Share Your Favorite Films</h2>
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
                                        <MovieCard key={movie.id} movie={movie} />
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