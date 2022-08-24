import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Movies } from "./Pages/Movies";
import { SingleMovie } from "./Pages/SingleMovie";


function App() {
  const [count, setCount] = useState();

  return (
    <div className="App">
      <Header />

      
         <Routes> 

          <Route index element = {<Navigate to = '/movies' />}/>
          <Route path="/movies" element = {<Movies />}/>
          <Route path="/movies/:id" element= {<SingleMovie />} />

        </Routes> 
      

    </div>
  );
}

export default App;
