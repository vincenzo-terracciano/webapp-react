import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateMovie() {

    const navigate = useNavigate()
    const initialFormData = {
        title: "",
        director: "",
        genre: "",
        abstract: "",
        release_year: "",
        image: "",
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleSubmit(e) {
        e.preventDefault()

        const form = new FormData()
        form.append('title', formData.title)
        form.append('director', formData.director)
        form.append('genre', formData.genre)
        form.append('abstract', formData.abstract)
        form.append('release_year', formData.release_year)
        form.append('image', formData.image)

        fetch('http://localhost:3000/api/v1/movies/create', {
            method: 'POST',
            body: form,
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'Movie created successfully');
                navigate('/admin');
            })
            .catch(err => {
                console.error(err, 'Error creating movie');
            })
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">Create New Movie</h1>

            <form encType="multipart/form-data" onSubmit={handleSubmit} className="col-md-6 mx-auto">

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="director" className="form-label">Director</label>
                    <input
                        type="director"
                        className="form-control"
                        name="director"
                        id="director"
                        value={formData.director}
                        onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input
                        type="genre"
                        className="form-control"
                        name="genre"
                        id="genre"
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="abstract" className="form-label">Abstract</label>
                    <textarea
                        type="abstract"
                        className="form-control"
                        name="abstract"
                        id="abstract"
                        value={formData.abstract}
                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="release_year" className="form-label">Release Year</label>
                    <input
                        type="number"
                        className="form-control"
                        name="release_year"
                        id="release_year"
                        value={formData.release_year}
                        onChange={(e) => setFormData({ ...formData, release_year: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="image"
                        placeholder="https://example.com/image.jpg"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3   ">Create Movie</button>

            </form>
        </div>
    )
}