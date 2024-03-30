import React, { Component } from 'react';
import './Homepage.css'; // Import your CSS file
import NavBar from './Page1/NavBar';
import Body from './Page1/Body';
import Logo from './Page1/Logo';
import ScoreBoard from './Page3/ScoreBoard';
import LineGraph from './Page2/LineChart';

export class Homepage extends Component {
    render() {
        return (
            < >
                <div className="app-container">
                    <Logo />
                    <NavBar />
                </div>
                <Body />
                <div className="chart-container">
                    <LineGraph />
                </div>
                <div>
                    <ScoreBoard />
                </div>
            </>
        );
    }
}

export default Homepage;
