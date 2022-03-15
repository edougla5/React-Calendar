import React, { useState } from "react"
import Boxes from './Components/Boxes'
import Nav from './Components/Nav'
import Modal from './Components/Modal'
import './App.css';

function App() {
  let [daysInMonth, setDaysNumber] = useState(null)
  let [month, setMonth] = useState(null)
  let [year, setYear] = useState(null)
  let [monthLabel, setMonthLabel] = useState(null)
  let [boxColor, setBoxColor] = useState(null)
  let [color, setColor] = useState(null)
  let [borderColor, setBorderColor] = useState(null)
  let [backingColor, setBackingColor] = useState(null)
  return (
    <div>
      <Nav setDaysNumber={setDaysNumber} setBackingColor={setBackingColor} setBorderColor={setBorderColor} setColor={setColor} setBoxColor={setBoxColor} setMonthLabel={setMonthLabel} setMonth={setMonth} setYear={setYear}/>
      <Boxes value={daysInMonth} month={month} year={year} backingColor={backingColor} borderColor={borderColor} color={color} boxColor={boxColor} monthLabel={monthLabel}/>
    </div>
  )
}

export default App