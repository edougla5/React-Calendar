import React, { useEffect, useState } from "react";
import "../App.css";
import Modal from "./Modal";
import ModalClose from "./ModalClose";
import Nav from "./Nav";
let x = 0;

const Boxes = (props) => {
  let [modalOpen, setModal] = useState(false);
  let [modalClose, closeModal] = useState(false);
  let [toggleModal, setToggle] = useState(null)
  let [month, setMonth] = useState(null)
  let [daySelected, setDay] = useState(null)
  let [boxColor, setBoxColor] = useState('black')

  let boxClick = x => {
    setToggle(1)
    setDay(x)
  }

  let extraDays = [];
  
  let monthDays = [];
  let daysLabel = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
  
  for (let z = 1; z < props.value + 1; z++) {
    monthDays.push(z);
  }
  
  let tempDay = new Date(props.year, props.month, 1);

  console.log(props.year);
  console.log(props.month);
  console.log(tempDay);

  for (let x = 0; x < tempDay.getDay(); x++) {
    extraDays.push("0");
  }

  let today = new Date();
  let daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  console.log(props.boxColor)

  return (
    <div id="dayDisplay">
      <div>
        {toggleModal == 1? (
          <Modal setToggle={setToggle} setDay={setDay} date={props.monthLabel} day={daySelected} year={tempDay.getFullYear()}/>
        ) : null}
      </div>
      <div>{toggleModal == 2 ? <ModalClose /> : null}</div>
      <div className="daysContainer">
        {daysLabel.map((r) => (
          <div id="dayLabel">
            <ul>
              <li id="dayText">{r}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="boxes">
        {extraDays.map((e) => (
          <div className="blankBox">
            <ul>
              <li>{e}</li>
            </ul>
          </div>
        ))}
        {monthDays.map((g) => (
          <div className="box" style={{color: props.color, backgroundColor: props.boxColor, borderColor: props.borderColor}} onClick = {() => boxClick(g)}>
            <ul>
              <li>{g}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;