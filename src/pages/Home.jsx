import { useState, useEffect } from "react"

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
            <div className="container">
                <h1>Welcome to my homepage!</h1>
                <h2>Movies</h2>
                <div className="movies_list">
                    <div className="row">
                        {
                            movies.length > 0 ? (

                                movies.map(movie => (
                                    <div className="col" key={`Movie - ${movie.id}`}>
                                        <div className="card">
                                            <img src={movie.image} alt={movie.title} className="card-img-top" />
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


        </>
    )
}