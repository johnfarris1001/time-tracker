import React from 'react'

import { getTypesTimesObj } from '../typeAndTimeCalc'

function Results({ entries, user }) {

    const typesAndTimes = getTypesTimesObj(entries, user, true)
    const activitiesAndTimes = getTypesTimesObj(entries, user, false)

    const renderTypes = typesAndTimes.map(item => {
        return (
            <tr key={Object.keys(item)}>
                <td>{Object.keys(item)}</td>
                <td>{item[Object.keys(item)]}</td>
            </tr>
        )
    })

    const renderActivities = activitiesAndTimes.map(item => {
        return (
            <tr key={Object.keys(item)}>
                <td>{Object.keys(item)}</td>
                <td>{item[Object.keys(item)]}</td>
            </tr>
        )
    })

    return (
        <div className='center-div'>
            <h3>Time by Activity Type</h3>
            <table className='result-table'>
                <thead>
                    <tr>
                        <th scope='col'>Activity Type</th>
                        <th scope='col'>Total Time (hrs)</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTypes}
                </tbody>
            </table>
            <br />
            <h3>Time by Activity</h3>
            <table className='result-table'>
                <thead>
                    <tr>
                        <th scope='col'>Activity</th>
                        <th scope='col'>Total Time (hrs)</th>
                    </tr>
                </thead>
                <tbody>
                    {renderActivities}
                </tbody>
            </table>
        </div>
    )
}

export default Results