import React from 'react'

function NewEntry() {
    return (
        <div>
            <h3>Enter Details of Your Activity: </h3>
            <form>
                <label for="time">Start Time:</label>
                <input type='text' name='time' />
                <label for="name">Activity:</label>
                <input type='text' name='name' />
                <label for="type">Activity Type:</label>
                <input type='text' name='type' />
            </form>
        </div>
    )
}

export default NewEntry