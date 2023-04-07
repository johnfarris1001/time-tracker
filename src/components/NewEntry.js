import React, { useState } from 'react'

function NewEntry({ user }) {
    const [formData, setFormData] = useState({
        user: user,
        dateStart: new Date().toJSON().slice(0, 10),
        start: new Date().toJSON().slice(11, 16),
        length: 0,
        name: '',
        type: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
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
                    step='0.01'
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