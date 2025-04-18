import { useState } from "react"

export default function CreateMovie() {

    const initialFormData = {
        title: "",
        director: "",
        genre: "",
        abstract: "",
        release_year: "",
        image: "",
    }

    const [formData, setFormData] = useState(initialFormData)

    return (
        <div className="container py-4">
            <h1 className="mb-4">Create New Movie</h1>

            <form className="col-md-6">

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
                        type="text"
                        className="form-control"
                        name="image"
                        id="image"
                        placeholder="https://example.com/image.jpg"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create Movie</button>

            </form>
        </div>
    )
}