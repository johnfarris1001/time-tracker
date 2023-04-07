import React from 'react'

function NewEntry() {
    return (
        <div>
            <h3>Enter Details of Your Activity: </h3>
            <form>
                <label>Date:</label>
                <input onChange={e => console.log(e.target.value)} type='date' name='date' />
                <label>Start Time:</label>
                <input onChange={e => console.log(e.target.value)} type='time' name='time' />
                <label>Activity:</label>
                <input type='text' name='name' />
                <label>Activity Type:</label>
                <input type='text' name='type' />
            </form>
        </div>
    )
}

export default NewEntry