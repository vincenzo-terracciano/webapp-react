import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieReviewForm({ movieId }) {

    const api_url = 'http://localhost:3000/api/v1/movies/' + movieId + '/review'
    console.log(movieId, 'movieId from MovieReviwForm');
    console.log(api_url, 'api_url from MovieReviewForm');
    const navigate = useNavigate()

    const initialFormData = {
        name: '',
        vote: 1,
        text: ''
    }

    const [formData, setFormData] = useState(initialFormData)
    const [formErrors, setFormErrors] = useState({})
    const [success, setSuccess] = useState(false)

    function isFormValid(data) {
        const errors = {};

        /* check if the fields are empty */
        if (!data.vote) errors.vote = 'Vote is required'

        /* check if the field's lenght is valid */
        if (data.name.length < 3) errors.name = 'Username must be at least 3 characters long'
        if (data.name.length > 50) errors.name = 'Username must be less than 50 characters long'
        if (data.vote.length < 1 || data.vote.length > 5) errors.vote = 'Vote must be between 1 and 5'
        if (data.text.length < 10) errors.text = "Review's text must be at least 10 characters long"
        if (data.text.length > 500) errors.text = "Review's text must be less than 500 characters long"

        setFormErrors(errors)
        return Object.keys(errors).length === 0;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        console.log('Form submitted', formData);

        if (!isFormValid(formData)) {
            console.log('Form is not valid', formErrors);
            return
        }

        console.log('Form is valid', formData);


        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Form submitted successfully', data);
                if (data?.message) {
                    setSuccess(data.message)
                    setTimeout(() => {
                        setSuccess(false)
                        navigate(0)
                    }, 2000)
                }
            })
            .catch(err => {
                console.log('Error submitting form', err);

            })
    }

    return (
        <div className="add-review">
            <h3>Add your review</h3>

            {Object.keys(formErrors).length > 0 && (
                <div className="alert alert-danger" role="alert">
                    <ul className="mb-0">
                        {Object.keys(formErrors).map((key) => (
                            <li key={key}>{formErrors[key]}</li>
                        ))}
                    </ul>
                </div>
            )}

            {success && (
                <div className="alert alert-success" role="alert">
                    {success}
                </div>
            )}

            <form action="POST" className="mb-3" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Type your username here"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <select className="form-select"
                        id="vote"
                        name="vote"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: Number(e.target.value) })}>
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
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
            </form>
        </div>
    )
}