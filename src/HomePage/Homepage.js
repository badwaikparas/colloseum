import React, { Component } from 'react'
import "./Homepage.css"
import NavBar from './Page1/NavBar'
import Body from './Page1/Body'
import Logo from './Page1/Logo'
import Chart1 from "./Page2/Chart1"

export class Homepage extends Component {
    render() {
        return (
            <div style={{}}>
                <NavBar />
                <Logo />
                <Body />
                <Chart1 />
            </div>
        )
    }
}

export default Homepage