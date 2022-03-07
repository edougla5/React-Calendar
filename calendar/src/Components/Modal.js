import React, { useState, useReducer } from 'react'
import '../App.css'
import Arrow from '../images/arrow.png'

function checkDate(a) {
  let abrv = a
  if (a == 1 || a == 21 || a == 31) abrv = "st";
  else if (a == 2 || a == 22) abrv = "nd";
  else if (a == 3 || a == 23) abrv = "rd";
  else abrv = "th";
  return(abrv)
}

const Modal = props => {
  let [day, setDay] = useState(props.day)
  let [formData, setFormData] = useState('')
  const [data, setdata] = useState('test')
  let [month, setMonth] = useState(props.date)
  let [text, setText] = useState('event')
  
  document.addEventListener('keydown', log)

  // events stored multi dimensional array
  let events = []
  events.push({
    year: 2022,
    month: 'march',
    day: 7,
    event1: 'string'
  })
  console.log(events[0].year)

  function log(e) {
    if(e.keyCode == 27) {
      props.setToggle(2)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    events.push(formData)
    setdata(events)
    console.log(formData)
  }

  let dayForward = () => {
    if(day==1)
    setDay(day+1)
  }

  let dayBack = () => {
    setDay(day-1)
  }

  return (
    <div className="modal">
    <div className="modal-content">
      <span className="close-btn" onClick={() => props.setToggle(2)}>&times;</span>
      <div className = 'eventsBox'>
        <div className = 'eventButtons'>
          <form onSubmit={handleSubmit}>
            <input onChange={e => setFormData(e.target.value)} value={formData}/>
            <button type='submit'>add event</button>
            <button type='submit'>remove event</button>
          </form>
        </div>
        <div className='currentDate'>{month + ' ' + day+checkDate(day) + ' ' + props.year}</div>
        <h3 className = 'title'></h3>
        <h3 className = 'noEvents'>Add an event</h3>
        <h3 className = 'event'>{data}</h3>
           <h3 className = 'event'>{data}</h3>
           <h3 className = 'event'>{data}</h3>
      </div>
      <img src={Arrow} className='forwardDay' onClick={dayForward}/>
      <img src={Arrow} className='backwardDay' onClick={dayBack}/>
    </div>
    </div>
  )
}

export default Modal