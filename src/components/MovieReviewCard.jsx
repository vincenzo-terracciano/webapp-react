

export default function MovieReviewCard({ review }) {

    const { vote, text, name, created_at } = review

    return (
        <div className="card mb-5">
            <div className="card-header">
                <div className="vote">Vote: {vote}</div>
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