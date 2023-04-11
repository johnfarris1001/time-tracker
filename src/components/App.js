import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import EntryList from './EntryList'
import NewEntry from './NewEntry'
import Home from './Home'
import Edit from './Edit'

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
        setUser(e)
    }

    function addEntry(entry) {
        setEntries([
            ...entries,
            entry
        ])
    }

    function addNewUser(newUser) {
        setUser(newUser)
        setUsers([...users, newUser])
    }

    function handleDeleteEntry(id) {
        setEntries(entries.filter(entry => {
            return entry.id !== id
        }))
    }

    function handleUpdateEntry(updatedEntry) {
        setEntries(entries.map(entry => {
            if (updatedEntry.id === entry.id) return updatedEntry
            return entry
        }))
    }

    return (
        <div className="App">
            <br />
            <NavBar />
            <br />
            <br />
            <Home
                user={user}
                users={users}
                entries={entries}
                api={API}
                changeUser={changeUser}
                addNewUser={addNewUser}
                removeItem={handleDeleteEntry}
            />
            <Switch>
                <Route path='/entrylist'>
                    <EntryList
                        entries={entries}
                        user={user}
                        api={API}
                        removeItem={handleDeleteEntry}
                    />
                </Route>
                <Route path='/newentry'>
                    <NewEntry user={user} api={API} addEntry={addEntry} />
                </Route>
                <Route path='/edit/:id'>
                    <Edit
                        entries={entries}
                        user={user}
                        api={API}
                        updateEntry={handleUpdateEntry}
                    />
                </Route>
                <Route exact path='/'>
                    <About />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
