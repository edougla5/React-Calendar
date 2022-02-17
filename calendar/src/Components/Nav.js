import React from 'react'
import "../App.css";

const Nav = () => {
    return (
        <div className='daysContainer'>
    <div id='dayLabel'><ul><li id='dayText'>sun</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>mon</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>tues</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>wed</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>thurs</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>fri</li></ul></div>
    <div id='dayLabel'><ul><li id='dayText'>sat</li></ul></div>
    </div>
    )
}

export default Nav