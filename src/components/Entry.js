import React from 'react'

function Entry({ entry }) {
    return (
        <tr>
            <th scope="row">{entry.time}</th>
            <td>{entry.name}</td>
            <td>{entry.type}</td>
        </tr>
    )
}

export default Entry