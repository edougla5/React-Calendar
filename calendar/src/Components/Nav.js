import React, { useState } from "react";
import "../App.css";
import Arrow from '../images/monthArrow.png'

let today = new Date()

let year = today.getFullYear()

let yearNum = today.getFullYear()
let monthDisplay

let monthsLabel = (x) => {
    if ( x==0 )  {
        return ('jan')
    } else if (x == 1)  {
        return ('feb')
    } else if(x == 2)  {
        return('march')
    } else if(x == 3)  {
        return('April')
    } else if(x == 4)  {
        return ('May')
    } else if(x == 5)  {
        return ('June')
    } else if(x == 6)  {
        return ('Jul')
    } else if(x == 7)  {
        return  ('Aug')
    } else if(x == 8)  {
        return ('Sept')
    } else if(x == 9)  {
        return ('Oct')
    } else if(x == 10)  {
        return ('Nov')
    } else if(x == 11)  {
        return ('Dec')
    }
}

//     let forwardMonth = () => {
    //         month++;
//         if (month == 12) {
    //           month = 0;
    //           yearNum++;
    //           year.innerHTML = yearNum;
    //         }
    //         monthDisplay.innerHTML = monthCheck()
    //     }
    
    //     let backMonth = () => {
        //         setMonth(month+1)
        //   if (month == -1) {
//     month = 11;
//     yearNum--;
//     year.innerHTML = yearNum;
//   }
//   changeMonth.innerHTML = monthCheck();

//     }


const Nav = () => {
let [month, setMonth] = useState(today.getMonth())

// monthDisplay[0].innerHTML = 'temp'
monthDisplay = monthsLabel(month)

let forwardMonth = () => {
    setMonth(month+1)
    if(month == 12) {
        setMonth(0)
    }
    monthDisplay = monthsLabel(month)
    console.log(month)
}

let backMonth = () => {
    setMonth(month-1)
    if(month == -1) {
        setMonth(11)
    }
    monthDisplay = monthsLabel(month)
    console.log(month)
}

    return (
        <div>
      <h3 className="month">{monthDisplay}</h3>
      <h3 className="year">{year}</h3>
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
  )
}

export default Nav