import React, { useState } from 'react'

function NewEntry({ user, api, addEntry }) {
    const date = {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }

    const time = `${date.hour < 10 ? `0${date.hour}` : date.hour}:${date.minute < 10 ? `0${date.minute}` : date.minute}`
    const day = `${date.year}-${date.month < 10 ? `0${date.month}` : date.month}-${date.day < 10 ? `0${date.day}` : date.day}`

    const [formData, setFormData] = useState({
        user: user,
        dateStart: day,
        start: time,
        length: 0,
        name: '',
        type: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => addEntry(data))

    }

    return (
        <div className='form' onSubmit={handleSubmit}>
            <h3>Enter Details of Your Activity: </h3>
            <form>
                <label>Date:</label>
                <input
                    onChange={e => {
                        setFormData({
                            ...formData,
                            dateStart: e.target.value
                        })
                    }}
                    value={formData.dateStart}
                    type='date'
                    name='date'
                />
                <br />
                <label>Start Time:</label>
                <input
                    onChange={e => {
                        setFormData({
                            ...formData,
                            start: e.target.value
                        })
                    }}
                    value={formData.start}
                    type='time'
                    name='time'
                />
                <br />
                <label>Length:</label>
                <input
                    type='number'
                    name='length'
                    step='0.1'
                    onChange={e => {
                        setFormData({
                            ...formData,
                            length: e.target.value
                        })
                    }}
                    value={formData.length}
                />
                <br />
                <label>Activity:</label>
                <input
                    type='text'
                    name='name'
                    onChange={e => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }}
                    value={formData.name}
                />
                <br />
                <label>Activity Type:</label>
                <input
                    type='text'
                    name='type'
                    onChange={e => {
                        setFormData({
                            ...formData,
                            type: e.target.value
                        })
                    }}
                    value={formData.type}
                />
                <br />
                <p>Current User: {user}</p>
                <br />
                <input
                    type='submit'
                    name='submit'
                    className='submit'
                />
            </form>
        </div>
    )
}

export default NewEntry