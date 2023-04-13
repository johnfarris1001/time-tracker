import React, { useState } from 'react'
import { getTime, getDate, roundTime } from '../DateTime'

function NewEntry({ user, api, addEntry }) {
    const [formData, setFormData] = useState({
        user: user,
        dateStart: getDate(),
        start: getTime(),
        length: 0,
        name: '',
        type: ''
    })

    function handleSubmit(e) {
        const validatedFormData = {
            ...formData,
            length: (Math.round(formData.length * 4) / 4),
            start: roundTime(formData.start)
        }
        e.preventDefault()
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validatedFormData)
        })
            .then(r => r.json())
            .then(data => addEntry(data))

        setFormData({
            user: user,
            dateStart: getDate(),
            start: getTime(),
            length: 0,
            name: '',
            type: ''
        })
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
                <label>Length (hrs):</label>
                <input
                    type='number'
                    name='length'
                    step='0.25'
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