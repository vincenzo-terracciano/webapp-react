export default function MovieReviewCard({ review }) {

    const { vote, text, name, created_at } = review

    {/* Function to get vote's review */ }
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
        <>
            {/* Card's single movie */}
            <div className="card my-4 review-card" >
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
                        Created at: {new Date(created_at).toLocaleString()}
                    </div>
                </div>
            </div >
        </>

    )
}