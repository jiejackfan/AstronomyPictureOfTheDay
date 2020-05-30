import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import DetailsComponent from './components/DetailsComponent'
import './App.css'
import SearchResultComponent from "./components/SearchResultComponent";

function App() {
  return (
    <div className="app container">
      <BrowserRouter>

        <Route path='/'
               exact={true}
               component={SearchComponent}>

        </Route>
        <Route path='/apods/:date'
               component={DetailsComponent}>
        </Route>

        <Route path='/apods-date-range/:startDate/:endDate/'
               component={SearchResultComponent}>
        </Route>
      </BrowserRouter>
    </div>  
  );
}

export default App;
