import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Movie ={
    id:number 
    Title: string 
    Year:string 
    Released:string
    Runtime: string 
    categoryId:number 
    Genre:string 
    Actors: string
    Plot:string 
    Language:string 
    Image: string   
}

export function Movies(){
    const[movies, setMovies] = useState<Movie[]>([])

    useEffect(()=>{
        fetch('http://localhost:3006/movies')
        .then(resp => resp.json())
        .then(moviesFromServer => setMovies(moviesFromServer))
    },[])

    return(
        <div className="movie-container">
            <ul className="movie-container-list">
                {movies.map(movie => (
                    <li>
                        <Link to = {`/movies/${movie.id}`}>
                            <div className="single-movie">
                                <img src={movie.Image}  />
                                <h3>{movie.Title}</h3>
                                <h4>{movie.Genre}</h4>


                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}