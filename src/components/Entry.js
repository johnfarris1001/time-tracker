import React from 'react'

function Entry({ entry }) {
    return (
        <tr>
            <th scope="row">{entry.date}</th>
            <td>{entry.start}</td>
            <th>{entry.end}</th>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
        </tr>
    )
}

export default Entry