import React, { useState } from 'react'

function Home({ user, users, changeUser, addNewUser }) {
    const [newUser, setNewUser] = useState('')

    const userOptions = users.map(user => {
        return <option key={user} value={user}>{user}</option>
    })

    function handleChange(e) {
        changeUser(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (users.includes(newUser)) {
            changeUser(newUser)
            setNewUser('')
            return
        }
        addNewUser(newUser)
        setNewUser('')
    }

    return (
        <div className='center-div'>
            <h3>Home</h3>
            <div>Current User:
                <select onChange={handleChange} value={user}>
                    {userOptions}
                </select>
            </div>
            <br />
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
        </div>
    )
}

export default Home