import React from 'react'

function Entry({ entry }) {
    return (
        <tr>
            <th scope="row">{entry.dateStart}</th>
            <td>{entry.start}</td>
            <td>{entry.length}</td>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
        </tr>
    )
}

export default Entry