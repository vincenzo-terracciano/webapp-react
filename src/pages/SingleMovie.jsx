import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieReviewCard from "../components/MovieReviewCard";


export default function SingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovie(data)
                setLoading(false);
            })
            .catch(err => {
                console.log('Error', err);
            })
    }, [])

    return (
        <>
            {/* Loader */}
            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading movie...</span>
                    </div>
                    <p>Loading movie details...</p>
                </div>
            ) : (
                <>
                    {/* Jumbotron*/}
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="display-5 fw-bold">{movie?.title}</h1>
                                    <p className="col-md-8 fs-4">{movie?.abstract}</p>
                                    <p>{movie?.genre}</p>
                                    <p>{movie?.release_year}</p>
                                </div>
                                <div className="col-4">
                                    <img
                                        src={`http://localhost:3000/${movie.image}`}
                                        alt={movie.title}
                                        className="img-fluid"
                                        style={{ height: '300px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="container">
                        <div className="add-review">
                            <h3>Add your review</h3>

                            <form action="POST" className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        id="username"
                                        placeholder="Type your username here"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">Rating</label>
                                    <select className="form-select" id="rating" name="rating">
                                        <option value="" disabled>Choose a rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Your Review</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        id="text"
                                        name="text"
                                        placeholder="Write your review here..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
                            </form>
                        </div>

                        <hr />

                        {/* Reviews */}
                        <h3>Reviews</h3>
                        {movie?.reviews && movie.reviews.length > 0 ? (
                            <div>
                                {movie.reviews.map(review => (
                                    <MovieReviewCard key={`Review - ${review.id}`} review={review} />
                                ))}
                            </div>
                        ) : (
                            <h4>No reviews yet</h4>
                        )}
                    </div>
                </>
            )}
        </>
    );

}