import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">Movie Web</h1>

      <nav className="header-list">
        <ul>
          <li>
            <Link to="/movies" style={{ color: "white" }}>
              Movies
            </Link>
          </li>

          {/* <div className="dropdown"> */}
            <li>
              <Link to="/genre" style={{ color: "white" }}>
                Genre
              </Link>
            </li>
            {/* <div className="dropdown-conten">
                <p>Adventure, Fantasy</p>
                <p>Action, Sci-Fi</p>
                <p>Crime, Drama</p>
                <p>Biography</p>
            </div>
          </div> */}

          
        </ul>
      </nav>
    </header>
  );
}
