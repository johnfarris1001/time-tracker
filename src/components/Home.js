import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RunningActivity from './RunningActivity'
import { getTime, getDate } from '../DateTime'

function Home({ user, users, api, entries, changeUser, addNewUser, addEntry, updateEntry }) {
    const [newUser, setNewUser] = useState('')
    const history = useHistory()

    const userOptions = users.map(user => {
        return <option key={user} value={user}>{user}</option>
    })

    const renderRunningActivities = entries.filter(item => {
        return (item.user === user && item.length === 'running...')
    }).map(item => {
        return <RunningActivity key={item.id} entry={item} api={api} updateEntry={updateEntry} />
    })

    function handleChange(e) {
        changeUser(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (users.includes(newUser)) {
            changeUser(newUser)
            setNewUser('')
            history.push('/newentry')
            return
        }
        addNewUser(newUser)
        setNewUser('')
        history.push('/newentry')
    }

    function startActivity() {
        const newActivity = {
            user: user,
            name: '',
            type: '',
            start: getTime(),
            dateStart: getDate(),
            length: 'running...'
        }
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newActivity)
        })
            .then(r => r.json())
            .then(data => addEntry(data))
    }

    return (
        <div className='center-div'>
            <div>Current User:
                <select onChange={handleChange} value={user}>
                    {userOptions}
                </select>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add User:</label>
                    <input
                        onChange={e => setNewUser(e.target.value)}
                        value={newUser}
                        type="text"
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <button onClick={startActivity}>Start New Running Activity</button>
            </div>
            <br />
            <div>
                {renderRunningActivities ? <table className='center'>
                    <tbody>
                        {renderRunningActivities}
                    </tbody>
                </table> : null}
            </div>
        </div>
    )
}

export default Home