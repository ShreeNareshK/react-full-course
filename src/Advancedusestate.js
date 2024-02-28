import React, { useState } from "react";
import './advanecedUseState.css';

function AdvanceUseState() {
  /* var details = [
    {
      firstName: "Naresh",
      lastName: "Shree",
      contact: "+91 7995190840",
      designation: "Frontend Dev",
    },
    {
      firstName: "Chinni",
      lastName: "Chinni",
      contact: "+91 9494310396",
      designation: "Systems Engineer",
    },
  ];

  const [data, setData] = useState(details[0]); // Set initial state with the first item

  function changeEmployee() {
    setData(details[1]); // Set state to the second item
  } */

  var object={
    firstName : "Shree",
    lastName : "Naresh",
    contact : "+91 7995190840",
    designation : "Frontend Dev",
  }
  const[data, setData]=useState('');
  const[hide, show]=useState(true);
  function changeEmployee(){
    setData(object);
    show(false);
  }
  function clearEmployee(){
    setData('');
    show(true);
  }
  return (
    <>
      <div>
          {/* <div className="emp-card" >
            <div className="firstName">{data.firstName}</div>
            <div className="lastName">{data.lastName}</div>
            <div className="contact">{data.contact}</div>
            <div className="designation">{data.designation}</div>
            <button className="next" onClick={changeEmployee}>Change Employee</button>
        </div> */}
        <div className="emp-card" >
            <div className="firstName">{data.firstName}</div>
            <div className="lastName">{data.lastName}</div>
            <div className="contact">{data.contact}</div>
            <div className="designation">{data.designation}</div>
            {hide&&
            <>
            <button className="next" onClick={changeEmployee}>Show Employee</button>
            </>
            }
            {!hide &&
            <>
            <button className="clear" onClick={clearEmployee}>Hide Employee</button>
            </>
            }
        </div>
      </div>
    </>
  );
}

export default AdvanceUseState;
