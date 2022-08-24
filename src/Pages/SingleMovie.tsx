import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
};

export function SingleMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams()
  

  useEffect(() => {
    fetch(`http://localhost:3005/movies/${params.id}`)
      .then((resp) => resp.json())
      .then((movieFromServer) => setMovie(movieFromServer))
  }, []);

  if (movie === null) return <h2>Loding</h2>;

  return (
    <div>
      <img src={movie.Image} />

      <div>
        <h2>{movie.Title}</h2>
        <h3>{movie.Plot}</h3>
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
      </div>
    </div>
  );
}
