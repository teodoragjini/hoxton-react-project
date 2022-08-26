import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { SearchBar } from "./SearchBar";

type Category = {
  id: number;
  name: string;
};

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
  totalSeasons: string;
};

export function Header() {
  const [genreCategories, setGenreCategories] = useState<Category[]>([]);
  const [movies, setMovies] = useState<Movie[]>([])
  const[search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3005/categories")
        .then((resp) => resp.json())
        .then((genreCategoriesFromServer) =>
            setGenreCategories(genreCategoriesFromServer)
        );
  }, []);

  return (
    <header className="header">
       
      <h1 className="logo">Movie Web</h1>

      <nav className="header-list">
        <ul>
          <li>
            <Link to="/movies" style={{ color: "white", alignItems:"center"}}>
              Movies
            </Link>
          </li>

            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  Genre
                </button>
     
                <div className="dropdown-content">
                  {genreCategories.map((category) => (
                      <Link to={`/genre/${category.id}`}>{category.name}</Link>
                  ))}
                </div>
              </div>
            </li>
        </ul>
      </nav>
  
    </header>
  );
}
