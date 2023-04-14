import React from 'react'

function getTypesTimesObj(entries, user, isType) {
    const typeArr = []
    const typeTimes = []
    const typesToDisplay = []

    const userEntries = entries.filter(entry => {
        return user === entry.user
    })

    for (let entry of userEntries) {
        if (isType) {
            if (!typeArr.includes(entry.type)) {
                typeArr.push(entry.type)
                typeTimes.push(0)
            }
        } else {
            if (!typeArr.includes(entry.name)) {
                typeArr.push(entry.name)
                typeTimes.push(0)
            }
        }
    }

    for (let entry of userEntries) {
        if (isType) {
            for (let i = 0; i < typeTimes.length; i++) {
                if (entry.type === typeArr[i]) {
                    typeTimes[i] = typeTimes[i] + entry.length
                }
            }
        } else {
            for (let i = 0; i < typeTimes.length; i++) {
                if (entry.name === typeArr[i]) {
                    typeTimes[i] = typeTimes[i] + entry.length
                }
            }
        }
    }

    for (let i = 0; i < typeTimes.length; i++) {
        typesToDisplay.push({ [typeArr[i]]: typeTimes[i] })
    }

    return typesToDisplay
}

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
            <table>
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
            <table>
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