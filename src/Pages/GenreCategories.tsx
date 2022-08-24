import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export function GenreCategories() {
  const [genreCategories, setGenreCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:3005/categories")
      .then((resp) => resp.json())
      .then((genreCategoriesFromServer) =>
        setGenreCategories(genreCategoriesFromServer)
      );
  }, []);

  return (
    <div className="genreCategories">
      <ul className="categories-list">
        {genreCategories.map((category) => (
          <li>
            <Link to={`/genre/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
