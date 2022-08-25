import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trailer } from "../Components/Trailer";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>;

type Movie = {
  id: number;
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  categoryId: number;
  Genre: string;
  Actors: string;
  Plot: string;
  Language: string;
  Image: string;
  Trailer: string;
  totalSeasons: string
};

export function SingleMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3005/movies/${params.id}`)
      .then((resp) => resp.json())
      .then((movieFromServer) => setMovie(movieFromServer));
  }, []);

  if (movie === null) return <h2>Loding</h2>;

  return (
    <div className="single-movie-container">
      <div className="leftSingleMovie">
        {/* <img src={movie.Image}  style={{width:300 , height:300}}/> */}
        <Trailer id={movie.Trailer}/>
      </div>

      <div className="rightSingleMovie">
        <h2>{movie.Title}</h2>
        <h3>{movie.Plot}</h3>

        {/* <p className="season"> Season:{movie.totalSeasons}</p> */}



        <span className="material-symbols-outlined">
          history
          {/* <p>{movie.totalSeasons}</p> */}
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
        </span>

        {/* <Trailer id={movie.Trailer}/> */}
        
        {/* <span className="material-symbols-outlined">
          play_arrow */}
        {/* <button className="single-button">
          TRAILER
          {/* <span className="material-symbols-outlined">play_arrow</span> */}
        {/* </button> */} 

        {/* </span> */}

        {/* <button>Trailer</button> */}

        {/* <span> */}
        {/* <p>{movie.Runtime}</p> */}
        {/* </span> */}
        {/* <p>{movie.Runtime}</p> */}
        {/* <p>{movie.Genre}</p> */}
      </div>
    </div>
  );
}
