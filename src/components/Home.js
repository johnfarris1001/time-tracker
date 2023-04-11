import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RunningActivity from './RunningActivity'

function Home({ user, users, entries, api, changeUser, addNewUser }) {
    const [newUser, setNewUser] = useState('')
    const [runningActivities, setRunningActivities] = useState([])
    const history = useHistory()

    const userOptions = users.map(user => {
        return <option key={user} value={user}>{user}</option>
    })

    const renderRunningActivities = runningActivities.map(item => {
        return <RunningActivity key={item.id} entry={item} api={api} />
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
        const date = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        }

        const time = `${date.hour}:${date.minute}`
        const day = `${date.year}-${date.month < 10 ? `0${date.month}` : date.month}-${date.day < 10 ? `0${date.day}` : date.day}`

        const newActivity = {
            user: user,
            name: '',
            type: '',
            start: time,
            dateStart: day,
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
            .then(data => setRunningActivities([...runningActivities, data]))
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
                {renderRunningActivities ? <table>
                    <tbody>
                        {renderRunningActivities}
                    </tbody>
                </table> : null}
            </div>
        </div>
    )
}

export default Home