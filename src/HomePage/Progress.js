import React from 'react'
import LineGraph from './Page2/LineChart'
import ScoreBoard from './Page2/ScoreBoard'

function Progress() {
    return (
        <div style={{ paddingTop: '70px' }}>
            <LineGraph />
            <ScoreBoard />
        </div>
    )
}

export default Progress