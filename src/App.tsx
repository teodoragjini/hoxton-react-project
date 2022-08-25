
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Movies } from "./Pages/Movies";
import { SingleGenre } from "./Pages/SingleGenre";
import { SingleMovie } from "./Pages/SingleMovie";


function App() {
 

  return (
    <div className="App">
      <Header />

      
         <Routes> 
          <Route index element = {<Navigate to = '/movies' />}/>
          <Route path="/movies" element = {<Movies />}/>
          <Route path="/movies/:id" element= {<SingleMovie />} />
          <Route path="/genre/:id" element= {<SingleGenre />} />
        </Routes> 
      

    </div>
  );
}

export default App;
