export default function MovieReviewCard({ review }) {

    const { vote, text, name, created_at } = review

    function getStars(vote) {
        const stars = [];
        const empty_stars = [];

        for (let i = 0; i < vote; i++) {
            stars.push(<i key={`Filled - ${i}`} className="bi bi-star-fill"></i>)
        }

        for (let i = 0; i < 5 - vote; i++) {
            empty_stars.push(<i key={`Empty - ${i}`} className="bi bi-star"></i>)
        }

        return [...stars, ...empty_stars]
    }

    return (
        <div className="card mb-5">
            <div className="card-header">
                <div className="vote">{getStars(vote)}</div>
            </div>
            <div className="card-body">
                <p>
                    {text}
                </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                {name}
                <div className="created-at">
                    Created at: {created_at}
                </div>
            </div>
        </div>
    )
}