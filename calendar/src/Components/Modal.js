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

let events = [];

const Modal = (props) => {
  let [day, setDay] = useState(props.day);
  let [count, setCount] = useState(null)
  let [formData, setFormData] = useState("");
  const [data, setdata] = useState("");
  let [month, setMonth] = useState(props.date);
  let [text, setText] = useState(false);

  document.addEventListener("keydown", log);


  // events stored multi dimensional array

  function log(e) {
    if (e.keyCode == 27) {
      props.setToggle(2);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    events.push({
      year: props.year,
      month: props.month,
      day: props.day,
      event1: formData,
    });
    setdata(events[0].event1);
  };

  let dayForward = () => {
    setDay(day + 1);
  };

  let dayBack = () => {
    setDay(day - 1);
  }

    for(let q=0;q<events.length;q++) {
      events[q].day == props.day ?
        console.log(events[q].day) :
        setText(true)
        setCount(q)
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
                onChange={(e) => setFormData(e.target.value)}
                value={formData}
              />
              <button type="submit">add event</button>
              <button type="submit">remove event</button>
            </form>
          </div>
          <div className="currentDate">
            {month + " " + day + checkDate(day) + " " + props.year}
          </div>
          <h3 className="title"></h3>
          {text ? (
            <div>
              <h3 className="event">{events[count].event1}</h3>
              <h3 className="event">{events[count].events2}</h3>
              <h3 className="event">{events[count].event3}</h3>
            </div>
          ) : (
            <h3 className="noEvents">{'no events set for today'}</h3>
          )}
        </div>
        <img src={Arrow} className="forwardDay" onClick={dayForward} />
        <img src={Arrow} className="backwardDay" onClick={dayBack} />
      </div>
    </div>
  );
};

export default Modal;