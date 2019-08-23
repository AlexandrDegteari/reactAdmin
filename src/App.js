import React from 'react';
import './App.css';
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*{token?<Route path='/profile' component={Profile}/>: null}*/}
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
