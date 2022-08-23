import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">Movie Web</h1>

      <nav className="header-list">
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
