import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css'
import Header from './header.js'
import Search from './Search';
import axios from 'axios'
import Results from './results'
import Popup from './popup'
import Bio from './Bio';
import CreateFilm from './createFilm'
import EditFilm from './editFilm'
import FilmLista from './filmLista'
import Footer from './footer';

function App() {

  const [state, setState] = useState({
    s: "",
    results:[],
    selected:{}
  })
  const apiurl = "http://www.omdbapi.com/?apikey=b119d5dc";
  
  //Hämtar film som från api med samma söknamn
  const search = (e) =>
  {
    if (e.key === "Enter")
    {
      axios(apiurl + "&s=" + state.s).then(({data}) =>
      {
        let result = data.Search;

        setState(prevState => {
          return {...prevState, results:result }
        })
      });
    }
  }

  const handleInput = (e) =>
  {
    let s = e.target.value;

    setState(prevState =>{
      return {...prevState, s: s}
    });
  }
 // Vissar info om en film med hjälp av id 
  const openPopup = id =>
  {
    axios(apiurl + "&i=" + id).then(({data}) =>
    {
      let result = data;
      
      setState(prevState =>{
        return{...prevState, selected:result}
      });
    });
  }
// Stänger info kort
  const closePopup = () =>{
    setState(prevState =>{
      return{ ...prevState, selected:{} }
    });
  }
  

 

  return (
     <BrowserRouter>  
    <div className="App">   

       <Header />

       <Search handleInput = {handleInput} search={search}/>

       <Results results={state.results} openPopup={openPopup} />

       {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false } 

   

    <Switch>
         <Route path="/bio" component={Bio} ></Route>
         <Route exact path="/createFilm" component={CreateFilm} ></Route>
         <Route exact path="/filmLista" component={FilmLista} ></Route>
         <Route path='/edit/:id' component={EditFilm} />    
    </Switch>
    </div>

    </BrowserRouter>
    
  );
  
  
}

export default App;



