import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getLength } from '../DateTime'

function RunningActivity({ entry, api, updateEntry }) {
    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })
    const history = useHistory()

    function endTask() {
        fetch(`${api}/${entry.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...entry,
                name: formData.name,
                type: formData.type,
                length: getLength(entry)
            })
        })
            .then(r => r.json())
            .then(data => updateEntry(data))
        history.push('./entrylist')
    }

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
            <td><button onClick={endTask}>End Activity</button></td>
        </tr>
    )
}

export default RunningActivity