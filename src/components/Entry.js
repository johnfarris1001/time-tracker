import React from 'react'

function Entry({ entry, api, removeItem }) {
    function handleDelete() {
        fetch(`${api}/${entry.id}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(() => removeItem(entry.id))
    }

    return (
        <tr>
            <th scope="row">{entry.dateStart}</th>
            <td>{entry.start}</td>
            <td>{entry.length} {entry.length === 1 ? 'hr' : 'hrs'}</td>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Entry