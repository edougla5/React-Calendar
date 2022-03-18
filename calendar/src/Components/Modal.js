import React, { useState, useReducer, useEffect } from "react";
import "../App.css";
import Arrow from "../images/arrow.png";

function checkDate(a) {
  let abrv = a;
  if (a == 1 || a == 21 || a == 31) abrv = "st";
  else if (a == 2 || a == 22) abrv = "nd";
  else if (a == 3 || a == 23) abrv = "rd";
  else abrv = "th";
  return abrv;
}

const Modal = (props) => {
  let [day, setDay] = useState(props.day);
  let [count, setCount] = useState(null);
  let [formData, setFormData] = useState("");
  let [month, setMonth] = useState(props.date);
  // let [text, setText] = useState(false)

  let event1, event2, event3;
  document.addEventListener("keydown", log);
  let textDisplay = false;

  // events stored multi dimensional array

  function log(e) {
    if (e.keyCode == 27) {
      props.setToggle(2);
    }
  }

  let tempEvents = [];
  // populate temp array with state array in boxes
  for (let x = 0; x < props.logged.length; x++) {
    tempEvents.push(props.logged[x]);
  }

  // pushes event objects & sets events state w/ updated array
  const handleSubmit = (e) => {
    e.preventDefault();
    tempEvents.push({
      year: props.year,
      month: props.month,
      day: day,
      text: formData,
    })
    props.setEvents(tempEvents);
    textDisplay = true;
  }

  let eventsArray = props.logged.filter(
    (e) => e.year == props.year && e.month == props.month && e.day == day
  );

  let removeEvent = () => {
    for (let z = props.logged.length - 1; z >= 0; z--) {
      if (
        props.logged[z].year == props.year &&
        props.logged[z].month == props.month &&
        props.logged[z].day == day
      ) {
        props.logged.splice(z, 1);
        break;
      }
    }
  }

  // console.log(props.loggedEvents.length)
  let dayForward = () => {
    eventsArray = props.logged.filter(
      (e) => e.year == props.year && e.month == props.month && e.day == day
    );
    setDay(day + 1);
  };

  let dayBack = () => {
    eventsArray = props.logged.filter(
      (e) => e.year == props.year && e.month == props.month && e.day == day
    );
    setDay(day - 1);
  };

  if (eventsArray[0]) {
    textDisplay = true;
    event1 = eventsArray[0].text;
  }

  if (eventsArray[1]) {
    event2 = eventsArray[1].text;
  }

  if (eventsArray[2]) {
    event3 = eventsArray[2].text;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={() => props.setToggle(2)}>
          &times;
        </span>
        <div className="eventsBox">
          <div className="eventButtons">
            <form onSubmit={handleSubmit}>
              <input
              className='textBox'
                onChange={(e) => setFormData(e.target.value)}
                value={formData}
              />
              <button className='addEvent' type="submit">add event</button>
            </form>
          <button className="removeEvent" onClick={removeEvent}>
            remove event
          </button>
          </div>
          <h5 className="currentDate">
            {month + " " + day + checkDate(day) + " " + props.year}
          </h5>
          <h3 className="title"></h3>
          {textDisplay ? (
            <div>
              <h3 className="event">{event1}</h3>
              <h3 className="event">{event2}</h3>
              <h3 className="event">{event3}</h3>
            </div>
          ) : (
            <h3 className="noEvents">{"no events set for today"}</h3>
          )}
        </div>
        <img src={Arrow} className="forwardDay" onClick={dayForward} />
        <img src={Arrow} className="backwardDay" onClick={dayBack} />
      </div>
    </div>
  );
};

export default Modal;