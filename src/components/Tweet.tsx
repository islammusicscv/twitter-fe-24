const Tweet = ({dataTweet}: { dataTweet }) => {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p className="card-text">{dataTweet.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">UP</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">DOWN</button>
                            </div>
                            <small className="text-body-secondary">Avtor</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tweet;