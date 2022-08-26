import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SearchBar } from "../Components/SearchBar"

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
    const[search, setSearch] = useState('')

    useEffect(()=>{
        fetch('http://localhost:3005/movies')
        .then(resp => resp.json())
        .then(moviesFromServer => setMovies(moviesFromServer))
    },[])

    const filteredMovies = movies.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase()))

    return(
        <>     
        <SearchBar setSearch={setSearch} />
        <div className="movie-container">
            <ul className="movie-container-list">
                {filteredMovies.map((movie: { id: any; Image: string | undefined; Title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; Genre: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
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
        </>
    )
}