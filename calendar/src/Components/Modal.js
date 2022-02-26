import React from 'react'
import '../App.css'

const Modal = props => {

  return (
    <div className="modal">
    <div className="modal-content">
      <button className="close-btn" onclick={() => props.setModal(false)}>&times;</button>
      <div className = 'eventsBox'>
        <div className = 'eventButtons'>
          <button className = 'addEvent' onclick = 'addEvent()'>New Event</button>
          <button className = 'clearEvents' onclick = 'clearIt()'>Clear</button>
        </div>
        <h3 className = 'title'></h3>
        <h3 className = 'noEvents'>no events today</h3>
          <h3 className = 'event1'></h3>
           <h3 className = 'event2'></h3>
           <h3 className = 'event3'></h3>
      </div>
      <img src='/calendar/dayArrow.png' id='forwardDay' onClick='forwardDay()'/>
      <img src='/calendar/dayArrow.png' id='backwardDay' onClick='forwardDay()'/>
    </div>
    </div>
  )
}

export default Modal