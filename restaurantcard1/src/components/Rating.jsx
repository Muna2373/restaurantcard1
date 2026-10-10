function Rating({ score }) {
    return (
        <div className="rating">
            <span>★</span>
            <strong>{score}</strong>
            <small> / 5</small>
        </div>
    );
}

export default Rating;