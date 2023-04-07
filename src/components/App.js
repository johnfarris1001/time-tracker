import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import EntryList from './EntryList'
import NewEntry from './NewEntry'
import Home from './Home'

import '../App.css';

function App() {
    const [entries, setEntries] = useState([])
    const [user, setUser] = useState("John")
    const [users, setUsers] = useState([])

    const API = 'http://localhost:3001/entries'

    useEffect(() => {
        fetch(API)
            .then(r => r.json())
            .then(data => {
                setEntries(data)

                const newUsers = []
                data.map(entry => {
                    if (!newUsers.includes(entry.user)) {
                        newUsers.push(entry.user)
                    }
                })
                setUsers(newUsers)

            })

    }, [])

    function changeUser(e) {
        setUser(e.target.value)
    }


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
                    <EntryList entries={entries} user={user} />
                </Route>
                <Route path='/newentry'>
                    <NewEntry />
                </Route>
                <Route exact path='/'>
                    <Home user={user} users={users} changeUser={changeUser} />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
