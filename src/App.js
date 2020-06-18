import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import DetailsComponent from './components/DetailsComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import ProfileComponent from './components/ProfileComponent'
import AboutComponent from './components/AboutComponent'
import './App.css'
import SearchResultComponent from "./components/SearchResultComponent";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <div className="app container">
      <BrowserRouter>

        <Route path='/'
               exact={true}
               component={HomeComponent}>
        </Route>
        <Route path='/search'
               exact={true}
               component={SearchComponent}>
        </Route>

        <Route path='/apods/:date'
               component={DetailsComponent}>
        </Route>

        <Route path='/apods-date-range/:startDate/:endDate/'
               component={SearchResultComponent}>
        </Route>

        <Route path='/register'
               component={RegisterComponent}>
        </Route>

        <Route path='/profile'
               component={ProfileComponent}>
        </Route>

        <Route path='/profile/:uid'
                component={ProfileComponent}>
        </Route>


        <Route path='/login'
               component={LoginComponent}>
        </Route>
           <Route path='/profile'
                       component={ProfileComponent}>
                </Route>
                 <Route path='/about'
                                       component={AboutComponent}>
                                </Route>
      </BrowserRouter>
    </div>  
  );
}

export default App;
