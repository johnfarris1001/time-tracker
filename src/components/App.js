import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import EntryList from './EntryList'
import NewEntry from './NewEntry'
import Home from './Home'

import '../App.css';

function App() {
    return (
        <div className="App">
            <br />
            <NavBar />
            <br />
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/entrylist'>
                    <EntryList />
                </Route>
                <Route path='/newentry'>
                    <NewEntry />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
