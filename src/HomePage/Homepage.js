import React, { Component } from 'react';
// import './CSS/Homepage.css'; // Import your CSS file
import 'C://Users//Paras//Desktop//Coloseum//colloseum//src//HomePage//CSS//Homepage.css'
import NavBar from './Page1/NavBar';
import Body from './Page1/Body';
import Logo from './Page1/Logo';
import ScoreBoard from './Page2/ScoreBoard';
import LineGraph from './Page2/LineChart';

export class Homepage extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <Logo />
                    <NavBar />
                </div>
                <Body />
                <div className="chart-container">
                    <LineGraph />
                    <ScoreBoard />
                </div>
                <div>
                </div>
            </>
        );
    }
}

export default Homepage;
