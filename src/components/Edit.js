import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function Edit({ entries, user, api, updateEntry }) {
    const params = useParams();
    const history = useHistory();

    const entry = entries.filter(item => {
        return item.id == params.id
    })[0]

    const [formData, setFormData] = useState({
        user: entry.user,
        dateStart: entry.dateStart,
        start: entry.start,
        length: entry.length,
        name: entry.name,
        type: entry.type
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${api}/${entry.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => updateEntry(data))
        history.goBack()
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

export default Edit