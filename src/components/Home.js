import React from 'react'

function Home({ user, users, changeUser }) {
    const userOptions = users.map(user => {
        return <option key={user} value={user}>{user}</option>
    })

    return (
        <div className='center-div'>
            <h3>Home</h3>
            <div>Current User:
                <select onChange={changeUser} value={user}>
                    {userOptions}
                </select>
            </div>
        </div>
    )
}

export default Home