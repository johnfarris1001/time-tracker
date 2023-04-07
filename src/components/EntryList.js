import React from 'react'
import Entry from './Entry'

function EntryList({ entries, user }) {
    const entriesToDisplay = entries.filter(entry => {
        return entry.user === user
    }).map(entry => {
        return (
            <Entry key={entry.id} entry={entry} />
        )
    })

    return (
        <div>
            <table className="center">
                <thead>
                    <tr>
                        <th scope="col">Time & Date</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Activity Type</th>
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