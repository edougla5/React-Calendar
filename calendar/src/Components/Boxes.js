import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal";
import Nav from './Nav'
let x = 0;

const Boxes = (props) => {
  let [modalOpen, setModal] = useState(false);
  let [month, setMonth] = useState([true, true, true]);
  let extraDays = [];

  console.log(extraDays[0]);
  console.log(document.getElementById("removeEvent"));

  let tempDay = new Date();
  tempDay.setDate(1);
  for (let x = 0; x < tempDay.getDay(); x++) {
    extraDays.push("0");
  }

  let today = new Date();
  console.log(new Date(today.getFullYear(), today.getMonth()+1, 0).getDate())

  return (
    <div id="dayDisplay">
      <div>{modalOpen ? <Modal /> : null}</div>
      <div className="daysContainer">
        <div id="dayLabel">
          <ul>
            <li id="dayText">sun</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">mon</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">tues</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">wed</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">thurs</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">fri</li>
          </ul>
        </div>
        <div id="dayLabel">
          <ul>
            <li id="dayText">sat</li>
          </ul>
        </div>
      </div>
      <div className="boxes">
        {extraDays.map((e) => (
          <div className="blankBox" onClick={() => setModal(true)}>
            <ul>
              <li>{e}</li>
            </ul>
          </div>
        ))}
        <div className="box" onClick={() => setModal(true)}>
          <ul>
            <li>1</li>
          </ul>
        </div>
        <div className="box" onclick={() => setModal(true)}>
          <ul>
            <li>2</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(3)">
          <ul>
            <li>3</li>
          </ul>
        </div>
        <div className="box" onclick="openModal()">
          <ul>
            <li>4</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(5)">
          <ul>
            <li>5</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(6)">
          <ul>
            <li>6</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(7)">
          <ul>
            <li>7</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(8)">
          <ul>
            <li>8</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(9)">
          <ul>
            <li>9</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(10)">
          <ul>
            <li>10</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(11)">
          <ul>
            <li>11</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(12)">
          <ul>
            <li>12</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(13)">
          <ul>
            <li>13</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(14)">
          <ul>
            <li>14</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(15)">
          <ul>
            <li>15</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(16)">
          <ul>
            <li>16</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(17)">
          <ul>
            <li>17</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(18)">
          <ul>
            <li>18</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(19)">
          <ul>
            <li>19</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(20)">
          <ul>
            <li>20</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(21)">
          <ul>
            <li>21</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(22)">
          <ul>
            <li>22</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(23)">
          <ul>
            <li>23</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(24)">
          <ul>
            <li>24</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(25)">
          <ul>
            <li>25</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(26)">
          <ul>
            <li>26</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(27)">
          <ul>
            <li>27</li>
          </ul>
        </div>
        <div className="box" onclick="openModal(28)">
          <ul>
            <li>28</li>
          </ul>
        </div>
        <div id="box29" onclick="openModal(29)">
          {" "}
          {month[0] ? (
            <ul>
              <li>29</li>
            </ul>
          ) : null}
        </div>
        <div id="box30" onclick="openModal(30)">
          {" "}
          {month[1] ? (
            <ul>
              <li>30</li>
            </ul>
          ) : null}
        </div>
        <div id="box31" onclick="openModal(31)">
          {" "}
          {month[2] ? (
            <ul>
              <li>31</li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
