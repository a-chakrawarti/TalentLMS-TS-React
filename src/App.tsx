import React, { useContext} from "react";
import "./App.css";
import { Store } from "./Store";
import {Link} from '@reach/router'


function App(props: any) {
  const { state } = useContext(Store);

  console.log(state)

  return (
    <div>
      <header className='header'>
        <div>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode</p>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favourite(s): {state.favourites.length}</Link>
      </div>
      </header>
    {props.children}
    </div>
  );
}

export default App;
