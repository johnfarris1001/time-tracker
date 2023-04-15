import React from 'react'

function About() {

    return (
        <div id='about-div'>
            <h3>Instructions:</h3>
            <ol>
                <li>Add yourself as a user using the 'Add User' text box. Or, if you are a returning user, select your username from the 'Current User' dropdown.</li>
                <li>Add new entries on the 'New Entry' page. Navigate to the page using the NavBar if necessary.</li>
                <li>Add more entries for every completed task on the 'New Entry' page.</li>
                <li>Click 'Start New Running Activity' to add an entry that you have started, but is not yet finished.</li>
                <li>Add in the 'Activity' and the 'Type'.  Click 'End Activity' when you have finished the entry.</li>
                <li>Navigate to the 'Entry List' page using the NavBar. All of your completed activities will be displayed here.</li>
                <li>Use the 'Entry List' page to Delete and Edit entries.</li>
                <li>Navigate to the 'Results' page to see a summary of how your time is spent.</li>
            </ol>
            <h4>Notes:</h4>
            <ul>
                <li>Rounds all time to the nearest quarter hour</li>
            </ul>
        </div>
    )
}

export default About