import React from 'react'
import { useHistory } from 'react-router-dom'

function Entry({ entry, api, removeItem }) {
    const history = useHistory()

    function handleDelete() {
        fetch(`${api}/${entry.id}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(() => removeItem(entry.id))
    }

    function toggleEdit() {
        history.push(`/edit/${entry.id}`)
    }

    return (
        <tr>
            <th scope="row">{entry.dateStart}</th>
            <td>{entry.start}</td>
            <td>{entry.length} {entry.length === 1 ? 'hr' : 'hrs'}</td>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
            <td><button onClick={toggleEdit}>Edit</button></td>
        </tr>
    )
}

export default Entry