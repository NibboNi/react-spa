import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://source.unsplash.com/qGbo4o77NaM"} alt={movie.title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title} ({movie.Year})</h3>
            </div>
        </div>
    );
}

export default MovieCard;