import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Admin() {

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
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Admin</h2>
                <Link className="btn btn-primary" to="/admin/movies/create">Add movie</Link>
            </div>

            <div
                class="table-responsive"
            >
                <table
                    class="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Director</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Release Year</th>
                            <th scope="col">Abstract</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            movies.map(movie => (
                                <tr key={movie.id}>
                                    <td scope="row">{movie.id}</td>
                                    <td>{movie.image}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>
                                    <td>{movie.abstract}</td>
                                    <td className="d-flex justify-content-center align-items-center gap-2">
                                        <button className="btn btn-success">View</button>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}