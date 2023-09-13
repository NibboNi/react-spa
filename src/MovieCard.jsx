import React from "react";

const MovieCard = () => {
    return (
        <div className="movie">
            <div>
                <p>{Movie1.Year}</p>
            </div>
            <div>
                <img src={Movie1.Poster !== "N/A" ? Movie1.Poster : "https://source.unsplash.com/qGbo4o77NaM"} alt={Movie1.title}/>
            </div>
            <div>
                <span>{Movie1.Type}</span>
                <h3>{Movie1.Title} ({Movie1.Year})</h3>
            </div>
        </div>
    );
}

export default MovieCard;