type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
export function SearchBar({setSearch} :Props){
    return(
        <input className="search"
        placeholder="Search a movie ..."
        onChange={event=>{
            setSearch(event.target.value)
        }}/>
    )
}