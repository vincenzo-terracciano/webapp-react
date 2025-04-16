import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieReviewCard from "../components/MovieReviewCard";


export default function SingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovie(data)
            })
            .catch(err => {
                console.log('Error', err);
            })
    }, [])

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{movie?.title}</h1>
                    <p className="col-md-8 fs-4">
                        {movie?.abstract}
                    </p>
                    <p>
                        {movie.genre}
                    </p>
                    <p>
                        {movie.release_year}
                    </p>
                </div>
            </div>

            {
                movie?.reviews && movie.reviews.length > 0 ? (
                    <div>
                        <h2>Reviews</h2>
                        <div className="container">
                            {
                                movie.reviews.map(review => (
                                    <MovieReviewCard key={`Review - ${review.id}`} review={review} />
                                ))
                            }
                        </div>

                    </div>
                ) : (
                    <h4>No reviews yet</h4>
                )
            }
        </>
    )
}