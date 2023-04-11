import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function RunningActivity({ entry, api }) {
    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })
    const history = useHistory()

    return (
        <tr>
            <th scope="row">{entry.dateStart}</th>
            <td>{entry.start}</td>
            <td>{entry.length}</td>
            <td><input
                type='text'
                name='name'
                placeholder='Activity...'
                onChange={e => {
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }}
                value={formData.name}
            /></td>
            <td><input
                type='text'
                name='type'
                placeholder='Type...'
                onChange={e => {
                    setFormData({
                        ...formData,
                        type: e.target.value
                    })
                }}
                value={formData.type}
            /></td>
            <td><button>End Activity</button></td>
        </tr>
    )
}

export default RunningActivity