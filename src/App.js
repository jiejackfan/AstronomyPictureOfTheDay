import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path='/'
               exact={true}
               component={SearchComponent}/>
      </BrowserRouter>
    </div>  
  );
}

export default App;
