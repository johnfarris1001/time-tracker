import React from 'react'
import Entry from './Entry'

function EntryList({ entries, user, api, removeItem }) {
    const entriesToDisplay = entries.filter(entry => {
        return entry.user === user
    }).filter(entry => {
        return entry.length !== 'running...'
    }).map(entry => {
        return (
            <Entry key={entry.id} entry={entry} api={api} removeItem={removeItem} />
        )
    })

    return (
        <div>
            <br />
            <table className="center">
                <thead>
                    <tr>
                        <th id='first-col' scope="col">Start Date</th>
                        <th scope="col">Start Time</th>
                        <th scope='col'>End Time</th>
                        <th scope="col">Length</th>
                        <th id='fifth-col' scope="col">Activity</th>
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