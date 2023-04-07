import React from 'react'
import Entry from './Entry'

function EntryList({ entries }) {
    const entriesToDisplay = entries.map(entry => {
        return (
            <td>
                <Entry key={entry.id} entry={entry} />
            </td>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Time & Date
                        </th>
                        <th>
                            Activity
                        </th>
                        <th>
                            Activity Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {entriesToDisplay}
                </tbody>
            </table>
        </div>
    )
}

export default EntryList