import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import DetailsComponent from './components/DetailsComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import ProfileComponent from './components/ProfileComponent'
import AboutComponent from './components/AboutComponent'
import PostsComponent from './components/PostsComponent'
import HomeComponent from './components/HomeComponent'
import privacy from './components/privacy'
import './App.css'
import SearchResultComponent from "./components/SearchResultComponent";

function App() {
    return (
        <div className="app container-fluid">
            <BrowserRouter>

                <Route path='/'
                       exact={true}
                       component={HomeComponent}>
                </Route>


                <Route path='/result/:date'
                       exact={true}
                       component={DetailsComponent}>
                </Route>

                <Route path='/result/startdate/:startDate/endDate/:endDate/'
                       exact={true}
                       component={SearchResultComponent}>
                </Route>

                <Route path='/register'
                       exact={true}
                       component={RegisterComponent}>
                </Route>

                <Route path='/profile'
                       exact={true}

                       component={ProfileComponent}>
                </Route>

                <Route path='/profile/:uid'
                       exact={true}
                       component={ProfileComponent}>
                </Route>



                <Route path='/login'
                       exact={true}
                       component={LoginComponent}>
                </Route>

                <Route path='/about'
                       component={AboutComponent}>

                </Route>
                <Route path='/home'
                       component={SearchComponent}>
                </Route>
                <Route path='/search'
                       component={SearchComponent}>
                </Route>
                <Route path='/posts'
                       component={PostsComponent}>
                </Route>
                <Route path='/privacy'
                       component={privacy}>
                </Route>
                <Route path='/postpicture/:date'
                       component={SearchComponent}>
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default App;
