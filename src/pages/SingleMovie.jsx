import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import MovieReviewCard from "../components/MovieReviewCard";
import MovieReviewForm from "../components/MovieReviewForm";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";


export default function SingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const { loading, setLoading } = useContext(GlobalContext)

    const navigate = useNavigate();

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data?.message) {
                    navigate('/404')
                }

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
                <Loader />
            ) : (
                <>
                    {/* Jumbotron*/}
                    <div className="p-5 mb-4 jumbo-movie rounded-3">
                        <div className="container-fluid py-5">
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="display-5 fw-bold">{movie?.title}</h1>
                                    <p className="col-md-8 fs-4">{movie?.abstract}</p>
                                    <p>{movie?.director}</p>
                                    <p>{movie?.genre}</p>
                                    <p>{movie?.release_year}</p>
                                </div>
                                <div className="col-4">
                                    {movie?.image ? (
                                        <img
                                            src={`http://localhost:3000/${movie.image}`}
                                            alt={movie.title}
                                            className="img-fluid"
                                            style={{ height: '300px' }}
                                        />
                                    ) : (
                                        <img
                                            src={'https://source.unsplash.com/300x450/?cinema,film'}
                                            alt={movie.title}
                                            className="img-fluid"
                                            style={{ height: '300px' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="container">

                        <MovieReviewForm movieId={movie.id} />

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