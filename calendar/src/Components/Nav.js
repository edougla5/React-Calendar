import React, { useState } from "react";
import "../App.css";
import Arrow from "../images/monthArrow.png";

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

let yearNum = today.getFullYear();
let monthDisplay;

const Nav = (props) => {
  let monthsLabel = (x) => {
    if (x == 0) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('white')
      props.setBackingColor('black')
      return "jan";
    } else if (x == 1) {
      props.setBoxColor('black')
      props.setColor('white')
      props.setBorderColor('black')
      props.setBackingColor('white')
      return "feb";
    } else if (x == 2) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      return "march";
    } else if (x == 3) {
      props.setBoxColor('black')
      props.setColor('white')
      props.setBorderColor('white')
      props.setBackingColor('black')
      return "April";
    } else if (x == 4) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      props.setBackingColor('white')
      return "May";
    } else if (x == 5) {
      props.setBoxColor('black')
      props.setColor('white')
      props.setBorderColor('white')
      props.setBackingColor('black')
      return "June";
    } else if (x == 6) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      props.setBackingColor('white')
      return "Jul";
    } else if (x == 7) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      props.setBackingColor('white')
      return "Aug";
    } else if (x == 8) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      return "Sept";
    } else if (x == 9) {
      props.setBoxColor('black')
      props.setColor('black')
      props.setBorderColor('white')
      props.setBackingColor('black')
      return "Oct";
    } else if (x == 10) {
      props.setBoxColor('white')
      props.setColor('black')
      props.setBorderColor('black')
      props.setBackingColor('white')
      return "Nov";
    } else if (x == 11) {
      props.setBoxColor('black')
      props.setColor('white')
      props.setBorderColor('white')
      props.setBackingColor('black')
      return "Dec";
    }
  }

  let [daysInMonth, setDays] = useState(new Date(year, month + 1, 0).getDate());

  props.setDaysNumber(daysInMonth);
  props.setYear(year);
  props.setMonth(month);
  props.setMonthLabel(monthsLabel(month))
  monthDisplay = monthsLabel(month);
  let forwardMonth = () => {
    month++;
    if (month == 11) {
      month = 0;
      year++;
    }
    monthDisplay = monthsLabel(month);
    setDays(new Date(year, month + 1, 0).getDate());
    props.setDaysNumber(new Date(year, month + 1, 0).getDate());
    props.setMonthLabel(monthsLabel(month))

  }
  console.log(monthsLabel(month))
  let backMonth = () => {
    month--;
    if (month == 0) {
      month = 11;
    }
    monthDisplay = monthsLabel(month);
    setDays(new Date(year, month + 1, 0).getDate());
    props.setDaysNumber(new Date(year, month + 1, 0).getDate());
  };
  return (
    <div>
      <h3 className="month" value={daysInMonth}>
        {monthDisplay}
      </h3>
      <h3 value={year} className="year">
        {year}
      </h3>
      <div className="arrowsContainer">
        <img
          className="backwardArrow"
          src={Arrow}
          width="40px"
          onClick={backMonth}
        />
        <img
          className="forwardArrow"
          src={Arrow}
          width="40px"
          onClick={forwardMonth}
        />
      </div>
    </div>
  );
};

export default Nav;
