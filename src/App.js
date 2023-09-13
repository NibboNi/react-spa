import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
    
const Movie1 = {
    "Title": "The Road Warrior",
    "Year": "1981",
    "imdbID": "tt0082694",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2VlNjNhZWQtMTY2OC00Y2E1LWJkNGUtMDU4M2ViNzliMGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies("Road Warrior");
    }, []);

    return (
        <div className="app">
            <h1>FilmePunto</h1>
            <div className="search">
                <input 
                    placeholder="Buscar pelicula"
                    value="Mad Max"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
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
            </div>
        </div>
    );
}

export default App;