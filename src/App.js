import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import DetailsComponent from './components/DetailsComponent'
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Route path='/'
               exact={true}
               component={SearchComponent}/>

        <Route path='/apods/:date'
               component={DetailsComponent}/>
        
      </BrowserRouter>
    </div>  
  );
}

export default App;
